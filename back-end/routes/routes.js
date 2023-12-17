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
routes.get('/channels', GeneralAuth.VerifyJWT, ChannelController.getChannels);
routes.get('/channels/:id', GeneralAuth.VerifyJWT, ChannelController.getChannel);
routes.post(
  '/channels',
  GeneralAuth.VerifyJWT,
  ChannelController.createChannels
);
routes.put(
  '/channels/:id',
  GeneralAuth.VerifyJWT,
  ChannelController.updateChannels
);
routes.delete(
  '/channels/:id',
  GeneralAuth.VerifyJWT,
  ChannelController.deleteChannels
);
// Videos
routes.post('/previewUp', VideoController.PreviewUpdate);
routes.post('/videos', GeneralAuth.VerifyJWT, VideoController.CreateVideo);
routes.get('/videos/:id', VideoController.GetVideo);
routes.put('/videos/:id', VideoController.UpdateVideo);
routes.put('/videos/:id/views', VideoController.IncreaseView);
routes.delete('/videos/:id/terminate', VideoController.SuddenTerminate);
routes.delete('/videos/:id', VideoController.DeleteVideo);

module.exports = routes;
