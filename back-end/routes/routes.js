const routes = require('express').Router();
const UserController = require('../controllers/Users');
const ChannelController = require('../controllers/Channels');
const VideoController = require('../controllers/Video');
const Validation = require('../middleware/Validation');
const validation = require('../helpers/validation');
const GeneralAuth = require('../middleware/GeneralAuth');

// http://<hostname>/v1/api/<uri>
// Users
routes.get('/users', UserController.getUsers);
routes.post(
  '/register',
  Validation.RegisterValidation(),
  Validation.Validation,
  UserController.Register
);
routes.post(
  '/login',
  Validation.LoginValidation(),
  Validation.Validation,
  UserController.Login
);
routes.put(
  '/user/:id',
  Validation.UpdateValidation(),
  Validation.Validation,
  UserController.UpdateUser
);
routes.get('/user/:id', UserController.GetUser);
routes.delete('/user/:id', UserController.DeleteUser);
// Channels
routes.get('/channels', ChannelController.getChannels);
routes.post(
  '/channels',
  GeneralAuth.VerifyJWT,
  ChannelController.createChannels
);
// Videos
routes.post('/previewUp', VideoController.PreviewUpdate);
routes.post('/videos', GeneralAuth.VerifyJWT, VideoController.CreateVideo);
routes.get('/videos/:id', VideoController.GetVideo);

module.exports = routes;
