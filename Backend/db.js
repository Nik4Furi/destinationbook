const { MONGO_URI } = require('./src/api/config/config');
const mongoose = require('mongoose');

//Connect app with database
const Connection = process.env.MONGO_URI || MONGO_URI;
// console.log("check connection ",Connection);

mongoose.connect(Connection,{useNewUrlParser:true}). 
then( ()=> console.log('Connection to database')). 
catch((e) => console.error('Error occured during connection to database ',e))