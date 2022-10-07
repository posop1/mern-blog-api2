import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import console from 'console';

import routes from './routes/index.js';

dotenv.config();

const { PORT } = process.env;
const { DATABASE_URL } = process.env;
const app = express();

const connectDataBase = async () => {
  try {
    mongoose.connect(DATABASE_URL);
    console.log('Connecting to DataBase');
  } catch (err) {
    console.log(err);
  }
};

mongoose.connection.on('disconnected', () => {
  console.log('log: mongoDB disconnected');
});
mongoose.connection.on('connected', () => {
  console.log('log: mongoDB connected');
});

// midlewares
app.use(express.json());
app.use(cors());

// router
app.use('/api', routes);

const startApp = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server lister on ${PORT}`);
      connectDataBase();
    });
  } catch (err) {
    console.log(err);
  }
};

startApp();
