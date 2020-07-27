import bodyParser from "body-parser";
import express from 'express'
import sql from 'mssql'
import login from './routes/login.mjs'
import cors from 'cors'

const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/login', login)

const server = app.listen(4000, function () {
    console.log('Server is running..');
});
