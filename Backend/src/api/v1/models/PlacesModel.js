const mongoose = require('mongoose');

//Slots for places 
const BookingSlots = Object.freeze({
    MORNING: 'morning',
    AFTERNOON : 'afternoon',
    EVENING: 'evening',
    NIGHT: 'night',
    ANY : 'anytime'
})

//Create the shcema of our users
const PlacesSchema = new mongoose.Schema({

    name: { type: String, required: true, minlength: [5, "Name must be 5 char long "], maxlength: [250, "Name mustn't 250 char long"] },

    description: { type: String, required: true, minlength: [9, "Description must be 9 char long "], maxlength: [450, "Description mustn't 250 char long"] },

    picture: { public_id: String, url: String },

    location : String,

    price: Number,

    totalPrice : Number,

    address: { type: String, minlength: [10, "Address must be 10 char long "], maxlength: [1000, "Address mustn't 1000 char long"] },

    sponser_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },

    capacity:Number,

    booking_slots: { type: String, enum: BookingSlots },

    available : {type: Boolean,default:false},

    feedbacks : [{
        user_id : {type: mongoose.Schema.Types.ObjectId, ref:'User'},
        comment : String,
        review : Number,
    }],

    avg_review : Number,
    noOfTimeBooking :{ type:Number,default:0},
    farFromMetro : String,
    keywords : Array
    // status : {type: Boolean, required: true, default:false},

}, { timestamps: true })


//Modal to which collection form we save the data
const PlacesModel = mongoose.model('Place', PlacesSchema)

module.exports = PlacesModel