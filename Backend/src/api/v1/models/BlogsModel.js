const mongoose = require('mongoose');

//Create the shcema of our users
const BlogsSchema = new mongoose.Schema({
    title: { type: String, required: true, minlength: [5, "Title must be 5 char long "], maxlength: [250, "Title mustn't 250 char long"] },

    description: { type: String, required: true, minlength: [7, "Description must be 7char long "]},

    written_by: { type: mongoose.Schema.Types.ObjectId,ref:'User'},

    status : {type: Boolean, default : false} 

    },{ timestamps: true })


//Modal to which collection form we save the data
const BlogsModel = mongoose.model('Blogs', BlogsSchema)

module.exports = BlogsModel