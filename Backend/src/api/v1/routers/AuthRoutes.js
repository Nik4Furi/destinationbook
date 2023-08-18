const Routers = require('express').Router();

//------------------------  Initialzing your controllers here -------------X
const FetchUser = require('../middlewares/FetchUser'); //Fetch details of the user
const AuthControllers = require('../controllers/AuthControllers');


//----------------------- Initizlalzing your apis's routes here --------------------X
Routers.post('/register',AuthControllers().Register); //Register the users, using POST '/api/v1/user/register'
Routers.post('/login',AuthControllers().Login); //Login the register users, using POST '/api/v1/user/login'
Routers.get('/getUser',FetchUser,AuthControllers().getUser); //Configure the login user's details, using GET '/api/v1/user/getUser'


module.exports = Routers