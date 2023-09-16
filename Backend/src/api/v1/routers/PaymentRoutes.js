const PaymentControllers = require('../controllers/PaymentControllers');

const Routers = require('express').Router();

//------------------------  Initialzing your controllers here -------------X
const FetchUser = require('../middlewares/FetchUser');


//----------------------- Initizlalzing your apis's routes here --------------------X
Routers.post('/checkout', FetchUser ,PaymentControllers().Checkout); // Create a order to processed further, using POST '/api/v1/payment/checkout'
Routers.post('/paymentverification', PaymentControllers().PaymentVerfication); // Verfifying the payment after creating the order, using POST '/api/v1/payment/paymentverfication'
Routers.post('/matchReference', FetchUser ,PaymentControllers().MatchReferenceId); // Verfifying the payment after creating the order, using POST '/api/v1/payment/paymentverfication'

module.exports = Routers