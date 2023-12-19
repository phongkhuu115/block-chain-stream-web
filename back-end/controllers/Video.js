const sequelize = require('../config/database');
const initModels = require('../models/init-models');
const models = initModels(sequelize);
const dotenv = require('dotenv');
const { ValidatePriviledge } = require('../helpers/validation');
const axios = require('axios');
const STREAM_DOMAIN = process.env.STREAM_DOMAIN;
const crypto = require('crypto');
dotenv.config();

module.exports = {
  CreateVideo: async (req, res) => {
    let {
      video_urls,
      video_name,
      video_type,
      video_owner,
      video_status,
      video_thumbnail,
    } = req.body;
    let checkStatus = await axios({
      method: 'get',
      url: `http://${STREAM_DOMAIN}:3333/liveUp/${video_owner}`,
    });
    if (ValidatePriviledge(req, video_owner) && checkStatus.data.status) {
      try {
        let video_id = crypto.randomUUID();
        await models.Videos.create({
          video_id: video_id,
          video_name: video_name,
          video_urls: video_urls,
          video_type: video_type,
          video_status: video_status,
          video_views: 0,
          video_thumbnail: video_thumbnail,
          video_owner: video_owner,
        });

        res.status(201).json({
          message: 'stream created',
          video_id: video_id,
        });
      } catch (err) {
        res.status(500).json({
          message: err.errors[0].message,
        });
      }
    } else {
      res.status(401).json({
        message: 'Unauthorized',
      });
    }
  },
  PreviewUpdate: async (req, res) => {
    let user_id = req.body.user_id;
    let user = await models.Users.findOne({
      where: {
        user_id: user_id,
      },
    });
    if (user) {
      global.io.emit(
        `preview_${user_id}`,
        `https://${process.env.STREAM_DOMAIN}/live/${user_id}.m3u8`
      );
    }
  },
  GetVideo: async (req, res) => {
    let id = req.params.id;

    try {
      let video = await models.Videos.findAll({
        where: {
          video_id: id,
        },
        include: {
          model: models.Users,
          as: 'Owners',
          attributes: {
            exclude: ['password'],
          },
        },
      });

      res.status(200).json({
        message: 'success',
        video: video,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: err,
      });
    }
  },
  IncreaseView: async (req, res) => {
    let id = req.params.id;
    try {
      const updatedRows = await models.Videos.increment('video_views', {
        where: { video_id: id },
        by: 1,
      });

      res.status(204).json({
        user: updatedRows,
      });
    } catch (err) {
      res.status(500).json({
        message: err.errors[0].message,
      });
    }
  },
  UpdateVideo: async (req, res) => {
    let id = req.params.id;
    let { video_owner } = req.body;
    if (ValidatePriviledge(req, video_owner)) {
      try {
        const updatedRows = await models.Videos.update(req.body, {
          where: { video_id: id },
        });

        res.status(204).json({
          user: updatedRows,
        });
      } catch (err) {
        res.status(500).json({
          message: err.errors[0].message,
        });
      }
    }
  },
  SuddenTerminate: async (req, res) => {
    let id = req.params.id;
    try {
      await models.Videos.destroy({
        where: { video_id: id },
      });

      res.status(200).json({
        message: 'live stream crashed',
      });
    } catch (err) {
      res.status(500).json({
        message: err.errors[0].message,
      });
    }
  },
  DeleteVideo: async (req, res) => {
    let id = req.params.id;
    let { video_owner } = req.body;
    if (ValidatePriviledge(req, video_owner)) {
      try {
        let query = {
          where: { video_id: id },
        };
        const video = await models.Videos.findOne(query);
        if (video.video_type !== 'stream') {
          await models.Videos.destroy(query);
        }

        res.status(200).json({
          message: 'video deleted',
        });
      } catch (err) {
        res.status(500).json({
          message: err.errors[0].message,
        });
      }
    }
  },
};