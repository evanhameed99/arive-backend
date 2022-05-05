import express from 'express';
import mongoose, { ConnectOptions } from 'mongoose';
import bodyParser from 'body-parser';
import mongoDB from './databases/mongo_connection';

const app = express();
const port = 3000;


app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});

mongoDB.once('open', () => {
  console.log('Connected to database');
});


app.get('/', (req, res) => {
  res.send('Hello World!');
});