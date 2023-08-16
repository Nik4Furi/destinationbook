/*
    When use this template,when renaming these shcemas and modal in that form
    1. ModalSchema
    2. ModalModal
    3. Modal
*/
const mongoose = require('mongoose');

//Create the shcema of our modal
const UsersSchema = new mongoose.Schema({
    name : {type: String, required: true, minlength: [5, "Name must be 5 char long "], maxlength: [150,"Name mustn't 150 char long"]},

    email : {type: String, required: true, minlength: [5, "Email must be 5 char long "], maxlength: [350,"Email mustn't 350 char long"], unique:true ,trim:true},

    password : {type: String, required: true, minlength: [8, "Password must be 8 char long "], maxlength: [450,"Password mustn't 450 char long"]},

    picturepic : {type: String, required: true, default:'' },

    role : {type: String, required: true, default:'user'},

    status : {type: Boolean, required: true, default:false},

},{timestamps :true})
 

//Modal to which collection form we save the data
const UsersModal = mongoose.modal('Modal', UsersSchema)

module.exports = UsersModal