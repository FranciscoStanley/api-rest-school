import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import { resolve } from 'path';
import studentRoutes from './routes/StudentRoutes';
import userRoutes from './routes/UserRoutes';
import authRoutes from './routes/AuthRoutes';
import photosRoutes from './routes/PhotosRoutes';

import './database';

dotenv.config();

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
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors(corsOptions));
    this.app.use(helmet());
    this.app.use(
      express.urlencoded({
        extended: true,
      }),
    );
    this.app.use(express.json());
    this.app.use('/images/', express.static(resolve(__dirname, '..', 'uploads', 'images')));
  }

  routes() {
    this.app.use('/student', studentRoutes);
    this.app.use('/user', userRoutes);
    this.app.use('/auth', authRoutes);
    this.app.use('/photo', photosRoutes);
  }
}

export default new App().app;
