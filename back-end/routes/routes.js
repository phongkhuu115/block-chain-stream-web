const routes = require('express').Router();
const UserController = require('../controllers/Users');
const ChannelController = require('../controllers/Channels');
const VideoController = require('../controllers/Video');
const ConmmentController = require('../controllers/Comments');
const Validation = require('../middleware/Validation');
const validation = require('../helpers/validation');
const GeneralAuth = require('../middleware/GeneralAuth');
const path = require('path');

routes.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
  // res.sendFile('../public/index.html');
});

// http://<hostname>/v1/api/<uri>
// Users
routes.get('/users', UserController.getUsers);
routes.get('/users/usernames', UserController.GetUsernames);
routes.get('/users/:username', UserController.GetIDFromUsername);
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
  GeneralAuth.VerifyJWT,
  UserController.UpdateUser
);
routes.get('/user/:id', UserController.GetUser);
routes.delete('/user/:id', UserController.DeleteUser);

// Videos
routes.post('/previewUp', VideoController.PreviewUpdate);
routes.post('/videos', GeneralAuth.VerifyJWT, VideoController.CreateVideo);
routes.get('/videos/:id', VideoController.GetVideo);
routes.get('/streams', VideoController.GetStreams);
routes.get('/streams/:id', VideoController.GetStream);
routes.put('/videos/:id', VideoController.UpdateVideo);
routes.put('/videos/:id/views', VideoController.IncreaseView);
routes.delete('/videos/:id/terminate', VideoController.SuddenTerminate);
routes.delete('/videos/:id', VideoController.DeleteVideo);

//Comments
routes.post('/comments', ConmmentController.RealtimeComment);

module.exports = routes;
