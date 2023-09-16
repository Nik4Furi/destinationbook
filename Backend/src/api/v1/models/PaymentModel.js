const mongoose = require('mongoose');

//-------- Schema to save payment details
const PaymentSchema = new mongoose.Schema({
    razorpay_payment_id : {type:String,reqquired:true},
    razorpay_order_id  :{type:String,reqquired:true},
    razorpay_signature : {type:String,reqquired:true}
},{timestamps:true})

const PaymentModel = mongoose.model('Payment',PaymentSchema)

module.exports = PaymentModel;