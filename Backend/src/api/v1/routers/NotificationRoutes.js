const Routers = require('express').Router();

//------------------------  Initialzing your controllers here -------------X
const NotificationControllers = require('../controllers/NotificationControllers');
const FetchUser = require('../middlewares/FetchUser');

//----------------------- Initizlalzing your apis's routes here --------------------X
Routers.post('/add/:id',FetchUser,NotificationControllers().add); // Adding a new notification, using POST '/api/v1/notification/add
Routers.get('/getAllNotifications',FetchUser,NotificationControllers().getAllNotifications); // Get all the notifications, using GET '/api/v1/notification/getAllNotifications
Routers.delete('/delete/:id',FetchUser,NotificationControllers().delete); // Delete a notification, using DELETE '/api/v1/notification/delete
Routers.put('/read',FetchUser,NotificationControllers().read); //Reading all unread notifications, using GET '/api/v1/notification/read

module.exports = Routers