const sequelize = require('../config/database');
const initModels = require('../models/init-models');
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const models = initModels(sequelize);
const jwt = require('jsonwebtoken');

module.exports = {
  getUsers: async function (req, res) {
    try {
      let users = await models.Users.findAll({ raw: true });
      if (users) {
        res.status(200).json({
          message: 'success',
          users: users,
        });
      } else {
        res.status(404).json({
          message: 'No users found',
        });
      }
    } catch (err) {
      res.status(500).json({
        message: err,
      });
    }
  },
  Register: async function (req, res) {
    let body = req.body;
    const { username, password, user_fullname, user_email } = body;
    const salt = await bcrypt.genSalt(10);
    const passwordHashed = await bcrypt.hash(password, salt);

    let user_id = crypto.randomUUID();

    try {
      await models.Users.create({
        user_id: user_id,
        username: username,
        user_fullname: user_fullname,
        password: passwordHashed,
        user_email: user_email,
        user_stream_key:
          `rtmp://${process.env.DATABASE_HOST}:1935/live/` + user_id,
        user_role: 1,
      });

      res.status(201).json({ message: 'user created' });
    } catch (err) {
      res.status(500).json({
        message: err,
      });
    }
  },
  Login: async function (req, res) {
    let { username, password } = req.body;
    let user = await models.Users.findOne({ where: { username: username } });
    if (user) {
      let passwordCheck = await bcrypt.compare(password, user.password);
      if (passwordCheck) {
        let {
          user_id,
          username,
          user_fullname,
          user_email,
          user_stream_key,
          user_role,
        } = user;
        let access_token = jwt.sign(
          {
            privilege: user_role === 2 ? 'admin' : 'user',
            user_id: user_id,
          },
          process.env.JWT_SECRET_KEY,
          {
            expiresIn: '10d',
          }
        );
        res.cookie('accessToken', access_token, {
          httpOnly: true,
          secure: true,
          path: '/',
          sameSite: 'none',
        });
        res.status(200).json({
          user: {
            user_id: user_id,
            username: username,
            user_fullname: user_fullname,
            user_email: user_email,
            user_stream_key: user_stream_key,
            user_role: user_role,
          },
        });
      }
    }
  },
  UpdateUser: async function (req, res) {
    let id = req.params.id;
    try {
      const updatedRows = await models.Users.update(req.body, {
        where: { user_id: id },
      });

      res.status(204).json({
        user: updatedRows,
      });
    } catch (err) {
      res.status(500).json({
        message: err,
      });
    }
  },
  GetUser: async function (req, res) {
    let id = req.params.id;
    try {
      const user = await models.Users.findOne({
        where: { user_id: id },
        attributes: { exclude: ['password'] },
      });
      res.status(200).json({
        message: 'success',
        user: user,
      });
    } catch (err) {
      res.status(500).json({
        message: err,
      });
    }
  },
  DeleteUser: async function (req, res) {
    let id = req.params.id;

    try {
      await models.Users.destroy({
        where: {
          user_id: id,
        },
      });

      res.status(200).json({
        message: 'user deleted',
      });
    } catch (err) {
      res.status(500).json({
        message: err,
      });
    }
  },
};
