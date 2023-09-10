import dotenv from 'dotenv';
import express from 'express';
import { resolve } from 'path';
import studentRoutes from './src/routes/StudentRoutes';
import userRoutes from './src/routes/UserRoutes';
import authRoutes from './src/routes/AuthRoutes';
import photosRoutes from './src/routes/PhotosRoutes';

import './src/database';

dotenv.config();

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(
      express.urlencoded({
        extended: true,
      }),
    );
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, 'uploads')));
  }

  routes() {
    this.app.use('/student', studentRoutes);
    this.app.use('/user', userRoutes);
    this.app.use('/auth', authRoutes);
    this.app.use('/photo', photosRoutes);
  }
}

export default new App().app;
