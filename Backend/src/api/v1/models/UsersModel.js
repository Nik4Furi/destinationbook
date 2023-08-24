const mongoose = require('mongoose');

//Roles in our app
const Roles = Object.freeze({
    ADMIN: 'admin',
    USER: 'user',
    SPONSER: 'sponser'
})

//Create the shcema of our users
const UsersSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: [5, "Name must be 5 char long "], maxlength: [250, "Name mustn't 250 char long"] },

    email: {
        type: String, required: true, minlength: [7, "Email must be 7 char long "], maxlength: [450, "Email mustn't 450 char long"], unique: [true,"This email is already exist"], trim: true, lowercase: true, validate: {
            validator: function (value) {
                if (/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(value) == false)
                    throw new Error(`{VALUE} is not valid email`)
            }}
        },


        phone: {
            type: Number, required: true, minlength: [10, "Phone must be 10 char long "], maxlength: [13, "Phone mustn't 13 char long"], unique: [true,"This phone credentials is already exist"], trim: true,validate: {
                validator: function (value) {
                    if (/^\d{10}$/.test(value) == false)
                        throw new Error(`{VALUE} is not valid phone`)
                }}
        },

        password: { type: String, required: true, minlength: [8, "Password must be 8 char long "], maxlength: [450, "Password mustn't 450 char long"] },

        // picturepic: {
        //     public_id: String, url: String
        // },

        role: { type: String, required: true, default: 'user', enum: Roles },

        address: { type: String},

        // status : {type: Boolean, required: true, default:false},

    },{ timestamps: true })


//Modal to which collection form we save the data
const UsersModel = mongoose.model('User', UsersSchema)

module.exports = UsersModel