const mongoose = require('mongoose');


//Create the shcema of our users
const NotificationSchema = new mongoose.Schema({
    title: { type: String, required: true, minlength: [5, "Title must be 5 char long "], maxlength: [250, "Title mustn't 250 char long"] },

    message: { type: String, required: true, minlength: [5, "Title must be 5 char long "]},

    sender: { type: mongoose.Schema.Types.ObjectId,ref:'User'}, 

    receiver: { type: mongoose.Schema.Types.ObjectId,ref:'User'},

    place_id: { type: mongoose.Schema.Types.ObjectId,ref:'Place'},

    read : { type:Boolean, default:false },

    onclick : {type:String},

    },{ timestamps: true })


//Modal to which collection form we save the data
const NotificationModel = mongoose.model('Notification', NotificationSchema)

module.exports = NotificationModel