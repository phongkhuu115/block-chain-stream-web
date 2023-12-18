const sequelize = require('../config/database');
const { ValidatePriviledge } = require('../helpers/validation');
const initModels = require('../models/init-models');
const models = initModels(sequelize);
const crypto = require('crypto');

module.exports = {
  AddLike: async (req, res) => {
    let { like_user, like_video } = req.body;
    if (ValidatePriviledge(like_user, req)) {
      try {
        let like_id = crypto.randomUUID();
        await models.Likes.create({
          like_id: like_id,
          like_user: like_user,
          like_video: like_video,
        });

        res.status(201).json({
          message: `user ${like_user} liked ${like_video}`,
          like_id: like_id,
        });
      } catch (err) {
        res.status(500).json({
          message: err.errors.message,
        });
      }
    } else {
      res.status(401).json({
        message: 'Unauthorized',
      });
    }
  },
  RemoveLike: async (req, res) => {
    let id = req.params.id;
    if (ValidatePriviledge(id, req)) {
      try {
        await models.Likes.destroy({
          where: {
            like_id: id,
          },
        });
      } catch (err) {
        res.status(500).json({
          message: err.errors.message,
        });
      }
    } else {
      res.status(401).json({
        message: 'Unauthorized',
      });
    }
  },
};
