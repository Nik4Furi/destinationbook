const Routers = require('express').Router();

//------------------------  Initialzing your controllers here -------------X
const BooksControllers = require('../controllers/BookControllers');
const FetchUser = require('../middlewares/FetchUser'); //Fetch the user token

const SponserRole = require('../middlewares/SponserRole'); //Fetch details of the role of sponser only can proceesed further


//----------------------- Initizlalzing your apis's routes here --------------------X
Routers.get('/fetchPlaces',BooksControllers().fetchPlaces); //Fetching all the places which are availabel, using GET '/api/v1/book/fetchPlace'
Routers.post('/makeRequest/:place_id',FetchUser,BooksControllers().makeRequest); //Make a request by the user to book a place, using POST '/api/v1/book/makeRequest'

Routers.put('/processedRequest/:id', FetchUser, SponserRole ,BooksControllers().processedRequest); //After requesting to processeding the place booking by the sponser '/api/v1/sponser/processedRequest'
Routers.put('/successRequest/:id', FetchUser, SponserRole ,BooksControllers().successRequest); //After requesting to processeding the place booking by the sponser '/api/v1/sponser/processedRequest'
Routers.put('/cancelRequest/:id', FetchUser, SponserRole ,BooksControllers().cancelRequest); //After requesting to processeding the place booking by the sponser '/api/v1/sponser/processedRequest'



module.exports = Routers