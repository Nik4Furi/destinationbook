const mongoose = require('mongoose');

//Booking slots in our app
const BookingTime = Object.freeze({
    MORNING: 'morning',
    AFTERNOON: 'afternoon',
    NIGHT: 'night',
    ANY : 'anytime'
})

//Requesting type is 
const Requests = Object.freeze({
    SUCCESS: 'success',
    PENDING: 'pending',
    CANCEL: 'cancel'
})

//Create the shcema of our users
const BooksSchema = new mongoose.Schema({

    place_id : { type:mongoose.Schema.Types.ObjectId,ref:'Place'  },

    sponser_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },

    capacity:Number,

    booking_slots: { type: String, enum: BookingTime },

    start_date : {type:Date,default:Date.now},

    end_date : Date,

    start_time : {type:Date,default:Date.now},

    end_time : Date,

    bookForWhat : String,

    status : {type:String, enum:Requests},

}, { timestamps: true })


//Modal to which collection form we save the data
const BooksModel = mongoose.model('Book', BooksSchema)

module.exports = BooksModel