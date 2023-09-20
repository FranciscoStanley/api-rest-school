"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);
var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
var _helmet = require('helmet'); var _helmet2 = _interopRequireDefault(_helmet);

var _path = require('path');
var _StudentRoutes = require('./routes/StudentRoutes'); var _StudentRoutes2 = _interopRequireDefault(_StudentRoutes);
var _UserRoutes = require('./routes/UserRoutes'); var _UserRoutes2 = _interopRequireDefault(_UserRoutes);
var _AuthRoutes = require('./routes/AuthRoutes'); var _AuthRoutes2 = _interopRequireDefault(_AuthRoutes);
var _PhotosRoutes = require('./routes/PhotosRoutes'); var _PhotosRoutes2 = _interopRequireDefault(_PhotosRoutes);

require('./database');

_dotenv2.default.config();

const whiteList = [
  'http://localhost:3000',
];

const corsOptions = {
  origin(origin, callback) {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

class App {
  constructor() {
    this.app = _express2.default.call(void 0, );
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(_cors2.default.call(void 0, corsOptions));
    this.app.use(_helmet2.default.call(void 0, ));
    this.app.use(
      _express2.default.urlencoded({
        extended: true,
      }),
    );
    this.app.use(_express2.default.json());
    this.app.use('/images/', _express2.default.static(_path.resolve.call(void 0, __dirname, '..', 'uploads', 'images')));
  }

  routes() {
    this.app.use('/student', _StudentRoutes2.default);
    this.app.use('/user', _UserRoutes2.default);
    this.app.use('/auth', _AuthRoutes2.default);
    this.app.use('/photo', _PhotosRoutes2.default);
  }
}

exports. default = new App().app;
