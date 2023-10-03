const mongoose = require('mongoose');

//Slots for places 
const BookingSlots = Object.freeze({
    MORNING: 'morning',
    AFTERNOON : 'afternoon',
    EVENING: 'evening',
    NIGHT: 'night'
})

//Requesting type is 
const Requests = Object.freeze({
    SUCCESS: 'success',
    PENDING: 'pending',
    CANCEL: 'cancel'
})


// Choosing Predefined purposes to define
const Purposes = Object.freeze({
    MEETING:'meeting room',
    VIRTUALOFFICE: 'virtual office',
    CONFERENCE: 'conference room',
    INTERVIEWROOM: 'interview room'
}) 

//Create the shcema of our users
const BooksSchema = new mongoose.Schema({

    place_id : { type:mongoose.Schema.Types.ObjectId,ref:'Place'  },

    booked_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },

    capacity:Number,

    totalPrice: Number,

    booking_slots: { type: String, enum: BookingSlots },

    start_date : {type:Date,default:Date.now},

    end_date : Date,

    start_time : {type:String,default:Date.now},

    end_time : String,  

    purpose : {type:String, enum:Purposes},
    
    status : {type:String, enum:Requests,default:Requests.PENDING},

}, { timestamps: true })


//Modal to which collection form we save the data
const BooksModel = mongoose.model('Book', BooksSchema)

module.exports = BooksModel