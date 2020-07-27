import bodyParser from "body-parser";
import express from 'express'
import cors from 'cors'

import login from './routes/login/login.mjs'
import mainDashboard from './routes/main-dashboard/mainDashboard.mjs'

const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/login', login)
app.use('/mainDashboard', mainDashboard)

const server = app.listen(4000, function () {
    console.log('Server is running..');
});
