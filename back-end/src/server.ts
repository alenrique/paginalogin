import express, { Express, NextFunction, Request, Response } from 'express';
import bodyParser from 'body-parser';
import userController from './controllers/userController'
import cors from 'cors'

const app: Express = express();
const port: number = 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

const corsOptions = {
    origin: 'http://localhost:3000', // Troque pela origem permitida do seu cliente
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    accessControlAllowOrigin: '*',
};

app.use(cors(corsOptions))

app.use('/api', userController)

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
