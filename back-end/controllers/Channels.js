const sequelize = require('../config/database');
const initModels = require('../models/init-models');
const crypto = require('crypto');
const { ValidatePriviledge } = require('../helpers/validation');
const models = initModels(sequelize);

module.exports = {
  getChannels: async (req, res) => {
    console.log(ValidatePriviledge(req));
    if (ValidatePriviledge(req)) {
      try {
        let channels = await models.Channels.findAll({ raw: true });
        if (channels) {
          res.status(200).json({
            channels: channels,
          });
        } else {
          res.status(404).json({
            message: 'No channel found',
          });
        }
      } catch (err) {
        res.status(500).json({
          message: err,
        });
      }
    } else {
      res.status(401).json({
        message: 'Unauthorized',
      });
    }
  },
  getChannel: async (req, res) => {
    let id = req.params.id;
    let { channel_owner } = req.body;
    if (ValidatePriviledge(req, channel_owner)) {
      try {
        let channel = await models.Channels.findOne({
          where: {
            channel_id: id,
          },
          include: {
            model: models.Users,
            as: 'Owners',
            attributes: {
              exclude: ['password'],
            },
          },
        });
        if (channel) {
          res.status(200).json({
            channel: channel,
          });
        } else {
          res.status(404).json({
            message: 'No channel found',
          });
        }
      } catch (err) {
        res.status(500).json({
          message: err,
        });
      }
    }
  },
  createChannels: async (req, res) => {
    let { channel_owner, channel_name } = req.body;

    if (ValidatePriviledge(req, channel_owner)) {
      try {
        await models.Channels.create({
          channel_id: crypto.randomUUID(),
          channel_name: channel_name,
          channel_owner: channel_owner,
        });

        res.status(201).json({ message: 'channel created' });
      } catch (err) {
        res.status(500).json({
          message: err,
        });
      }
    } else {
      res.status(401).json({
        message: 'Unauthorized',
      });
    }
  },
  updateChannels: async (req, res) => {
    let id = req.params.id;
    let { channel_owner } = req.body;
    if (ValidatePriviledge(req, channel_owner)) {
      try {
        const updatedRows = await models.Channels.update(req.body, {
          where: { channel_id: id },
        });

        res.status(204).json({
          user: updatedRows,
        });
      } catch (err) {
        res.status(500).json({
          message: err,
        });
      }
    } else {
      res.status(401).json({
        message: 'Unauthorized',
      });
    }
  },
  deleteChannels: async (req, res) => {
    let id = req.params.id;
    let { channel_owner } = req.body;
    if (ValidatePriviledge(req, channel_owner)) {
      try {
        let query = {
          where: { channel_id: id },
        };

        await models.Channels.destroy(query);

        res.status(200).json({
          message: 'video deleted',
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
};
