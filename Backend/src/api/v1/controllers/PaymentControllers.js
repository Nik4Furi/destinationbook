//----------------- Initalzing or requiring the modals here 

//------------- Creating the conrtollers to control payment stuff
function PaymentControllers() {
    return {
        
        //Payment by the user after successeding the request , using POST '/api/v1/payment/pay'
        async Pay(req,res){
            try {
                //Get the constraints from req.body;
                // const {price,address}


            } catch (error) {
                
            }
        }
    }
}

module.exports = PaymentControllers;