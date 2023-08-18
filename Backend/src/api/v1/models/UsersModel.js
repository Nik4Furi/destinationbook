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
        type: String, required: true, minlength: [5, "Email must be 5 char long "], maxlength: [450, "Email mustn't 450 char long"], unique: [true,"This email is already exist"], trim: true, lowercase: true, validate: {
            validator: function (value) {
                if (!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/g.test(value)))
                    throw new Error(`{VALUE} is not valid email`)
            }}
        },


        phone: {
            type: Number, required: true, minlength: [10, "Phone must be 10 char long "], maxlength: [13, "Phone mustn't 13 char long"], unique: [true,"This phone credentials is already exist"], trim: true
        },

        password: { type: String, required: true, minlength: [8, "Password must be 8 char long "], maxlength: [450, "Password mustn't 450 char long"] },

        picturepic: {
            public_id: String, url: String
        },

        role: { type: String, required: true, default: 'user', enum: Roles },

        address: { type: String, minlength: [10, "Address must be 10 char long "], maxlength: [1000, "Address mustn't 1000 char long"] },

        // status : {type: Boolean, required: true, default:false},

    },{ timestamps: true })


//Modal to which collection form we save the data
const UsersModel = mongoose.model('User', UsersSchema)

module.exports = UsersModel