const sequelize = require('../config/database');
const initModels = require('../models/init-models');
const models = initModels(sequelize);
const dotenv = require('dotenv')
dotenv.config()

module.exports = {
  CreateStream: async (req, res) => {},
  PreviewUpdate: async (req, res) => {
    let user_id = req.body.user_id;
    let user = await models.Users.findOne({
      where: {
        user_id: user_id,
      },
    });
    if (user) {
      global.io.emit(`preview_${user_id}`, `https://nt532-iot.site/live/${user_id}.m3u8`)
    }
  },
};
