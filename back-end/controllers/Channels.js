const sequelize = require('../config/database');
const initModels = require('../models/init-models');
const crypto = require('crypto');
const { ValidatePriviledge } = require('../helpers/validation');
const models = initModels(sequelize);

module.exports = {
  getChannels: async (req, res) => {
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
    try {
      let myVar = req.body.myVar;
      res.status().json({
        message: 'success',
        //other field here
      });
    } catch (error) {
      res.status(500).json({
        message: error + '',
      });
    }
  },
  deleteChannels: async (req, res) => {
    try {
      let myVar = req.body.myVar;
      res.status().json({
        message: 'success',
        //other field here
      });
    } catch (error) {
      res.status(500).json({
        message: error + '',
      });
    }
  },
};
