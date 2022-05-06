import express, { Request, Response } from 'express';
import mongoose, { ConnectOptions } from 'mongoose';
import bodyParser from 'body-parser';
import mongoDB from './databases/mongo_connection';
import usersRouter from './routes/users';
import hobbiesRouter from './routes/hobbies';
import swaggerDocs from './utils/swagger'
import * as dotenv from "dotenv";

const app = express();
const port = 3000;

dotenv.config({ path: __dirname+'/.env' });

app.listen(port, () => {
  console.log(`Express is listening at http://localhost:${port}`);
  swaggerDocs(app, port);
});

app.use(express.json());

mongoDB.once('open', () => {
  console.log('Connected to database');
});

/**
 * @openapi
 * /healthcheck:
 *  get:
 *     tags:
 *     - Healthcheck
 *     description: Responds if the app is up and running
 *     responses:
 *       200:
 *         description: App is up and running
 */
app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200));

app.use('/users', usersRouter);
app.use('/hobbies', hobbiesRouter);