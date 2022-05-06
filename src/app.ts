import express, { Request, Response } from 'express';
import mongoose, { ConnectOptions } from 'mongoose';
import bodyParser from 'body-parser';
import mongoDB from './databases/mongo_connection';
import usersRouter from './routes/users';
import hobbiesRouter from './routes/hobbies';
import swaggerDocs from './utils/swagger'
import cors from 'cors';
import 'dotenv/config';


const app = express();
const port  = (process.env.PORT || 3000) as number;
console.log('the port' , port)


app.listen(port, () => {
  console.log(`Express is listening at http://localhost:${port}`);
  swaggerDocs(app, port);
});

app.use(express.json());


const options: cors.CorsOptions = {
  allowedHeaders: [
    'Origin',
    'X-Requested-With',
    'Content-Type',
    'Accept',
    'X-Access-Token',
  ],
  credentials: true,
  methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
  origin: "*",
  preflightContinue: false,
};

app.use(cors(options));


mongoDB.once('open', () => {
  console.log('Connected to database!');
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