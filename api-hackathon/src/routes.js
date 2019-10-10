const routes = require('express').Router();
const transcribe = require('./services/transcribe');
const multer = require('multer');
const multerConfig = require('./config/multer');
const cache = require('./database/redis');

const RoomController = require('./controllers/RoomController');
const AudioController = require('./controllers/AudioController');
const UserController = require('./controllers/UserController');

routes.post('/users', UserController.store);

routes.get('/rooms', RoomController.index);
routes.get('/rooms/:id', RoomController.show);
routes.post('/rooms', RoomController.store);

routes.get('/audios', AudioController.index);
routes.post(
  '/audios',
  multer(multerConfig).single('file'),
  AudioController.store
);

module.exports = routes;
