//----------------- Initalzing or requiring the modals here 

//Razorpay Specific Stuff 
const Razorpay = require('razorpay');

const instance = new Razorpay({ //instance of the razorpay
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_SECRET_KEY,
});
// const instance = new Razorpay({ //instance of the razorpay
//     key_id:"rzp_test_aT9C3025prTaao",
//     key_secret:"MHycmMniYRHB5rKS5cQWdOg3",
//   });

const crypto = require('crypto');
const PaymentModel = require('../models/PaymentModel');

//------------- Creating the conrtollers to control payment stuff
function PaymentControllers() {
    return {

        //Processed to creata  a order to pay , using POST '/api/v1/payment/checkout'
        async Checkout(req, res) {
            try {
                //get constraints from req.body
                console.log('req.body ',req.body);

                const { amount } = req.body;

                if(!amount) return res.status(409).json({success:false,msg:'Amount is not found, please checkout again'})

                const options = {
                    amount: Number(amount) * 100,  // amount in the smallest currency unit
                    currency: "INR",
                    // receipt: "order_rcptid_11"
                };

                const order = await instance.orders.create(options);

                console.log('orders ', order);

                return res.status(200).json({ success: true, msg: 'Creating a order successfully ', order })

            } catch (error) { return res.status(500).json({ success: false, msg: error }) }
        },

        //After confirming the order now verify the payment , using POST '/api/v1/payment/paymentverfication'
        async PaymentVerfication(req, res) {
            try {
                //Get constraints from req.body

                const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = req.body;

                //----------Matching the razorpay signature
                let body = razorpay_order_id + '|' + razorpay_payment_id;

                const expectedSignature = crypto.createHmac('sha256', process.env.RAZORPAY_SECRET_KEY).update(body.toString()).digest('hex');

                const isMatch = razorpay_signature == expectedSignature;
                
                if (isMatch == false) {
                    res.redirect(`http://localhost:3000/paymenterror`);

                    // return res.status(404).json({ success: false, msg: 'Payment is not done yet, you are not authenticated' });
                }

                //----------- Save the payment data
                const payment = await PaymentModel.create({
                    razorpay_payment_id,razorpay_order_id,razorpay_signature
                })

                res.redirect(`http://localhost:3000/paymentverification?referenceid=${razorpay_payment_id}`);
                // res.redirect(`http://localhost:3000/paymentsuccess?referenceid=${razorpay_payment_id}`);

                // return res.status(200).json({ success: true, msg: 'Payment is done successfully'});

            } catch (error) { 
                console.log(error);
                return res.status(500).json({ success: false, msg: error }) }
        },

        // Try to check the reference id is valid
        async MatchReferenceId(req, res) {
            try {
                //get constraints from req.body
                const { referenceid } = req.body;

                if(!referenceid) return res.status(409).json({success:false,msg:'Amount is not found, please checkout again'})

               const isMatch = await PaymentModel.findOne({razorpay_payment_id : referenceid});
               
               if(isMatch == false)
                return res.status(404).json({success:false,msg:'Your payment is invalid, now checkout again'})

                return res.status(200).json({ success: true, msg: 'Your Payment is successed '})

            } catch (error) { return res.status(500).json({ success: false, msg: error }) }
        },
    }
}

module.exports = PaymentControllers;