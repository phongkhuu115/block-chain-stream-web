const sequelize = require('../config/database');
const initModels = require('../models/init-models');
const models = initModels(sequelize);
const fs = require('fs')

let user = models.Users.findAll({ raw: true, attributes: ['user_id'] }).then(users => {
  const directoryPath = '../live/';
  setInterval(() => {
    users.forEach(user => {
      let streamDirectory = directoryPath + user.user_id + ".m3u8"
      if (fs.existsSync(streamDirectory)) {
        global.io.emit(`preview-${user.user_id}`, () => {

        })
      }
    })
  }, 3000)
})

module.exports = {
  CreateStream: async (req, res) => {
    
  }
}