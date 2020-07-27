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

app.get('/', function (req, res) {
     // config for your database
     var config = {
         user: 'Kestrel',
         password: 'BirdieLover7*',
         server: 'DBaseServer1',
         port: 49272,
         database: 'Vulture'
     };

     sql.connect(config, function (err) {
         if (err) {
             res.send(err)
             return
         }

         res.send('Success')
     });
});

var server = app.listen(4000, function () {
    console.log('Server is running..');
});
