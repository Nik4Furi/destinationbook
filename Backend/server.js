console.log("Welcome in destination book app");

const { SERVER, PORT, CLOUDINARY_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } = require('./src/api/config/config'); //Configure global variables thats was work as an backup in less connection '.env'

require('dotenv').config() //When you install first column dependies
require('./db') //When configure your connection with database

const express = require('express');
const app = express();

const cors = require('cors') //When your app's api connect with the forntend applications
app.use(cors())

//When use your app any json object or form fill up
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Configuring the cloudinary
const cloudinary = require('cloudinary');

cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_NAME || CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY || CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET || CLOUDINARY_API_SECRET
})

//--------------- Home call
app.get('/', (req, res) => {
    res.send(`<h1>Welcome in destination book app</h1>`)
})

//Setup our routes dependence of versions
if (process.env.VERSION == 'v1') {
    console.log('v1')

    //Authentication routes
    const AuthRoutes = require('./src/api/v1/routers/AuthRoutes') //Connect your routes here
    app.use('/api/v1/user', AuthRoutes) //Can define path or respose of your apis path

    //Place routes
    const SponserRoutes = require('./src/api/v1/routers/SponserRoutes') //Connect your routes here
    app.use('/api/v1/sponser', SponserRoutes) //Can define path or respose of your apis path

    //Booking routes
    const BookingRoutes = require('./src/api/v1/routers/BookRoutes') //Connect your routes here
    app.use('/api/v1/book', BookingRoutes) //Can define path or respose of your apis path

    //Notifications routes
    const NotificationRoutes = require('./src/api/v1/routers/NotificationRoutes') //Connect your routes here
    app.use('/api/v1/notification', NotificationRoutes) //Can define path or respose of your apis path

}

const Server = process.env.SERVER || SERVER;
const Port = process.env.PORT || PORT;

app.listen(Port, () => console.info(`Application listen at ${Server}:${Port}`))