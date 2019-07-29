import express from 'express';
import routes from './src/route/route'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
var cors = require('cors');
 
const app = express()
const PORT = 8000
app.use(cors());

 
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/SarvaCart')
 
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
 
routes(app)
 
app.listen(PORT, () => {
    console.log(`you are server is running on ${PORT}`);
})