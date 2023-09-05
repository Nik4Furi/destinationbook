const Routers = require('express').Router();

const PlacesControllers = require('../controllers/PlaceControllers');
//------------------------  Initialzing your controllers here -------------X
const FetchUser = require('../middlewares/FetchUser'); //Fetch details of the user
const SponserRole = require('../middlewares/SponserRole'); //Fetch details of the role of sponser only can proceesed further
const UploadFile = require('../middlewares/UploadFile'); //To uploading the files

//----------------------- Initizlalzing your apis's routes here --------------------X
Routers.get('/fetch', FetchUser, SponserRole ,PlacesControllers().fetch); //Fetch all the places, using GET '/api/v1/sponser/fetch'
Routers.get('/fetchDetails/:id', FetchUser, SponserRole ,PlacesControllers().fetchDetails); //Fetch all the places, using GET '/api/v1/sponser/fetch'
Routers.post('/add', FetchUser, SponserRole,UploadFile ,PlacesControllers().add); //add a new places, using POST '/api/v1/sponser/add'
Routers.put('/update/:id', FetchUser, SponserRole ,PlacesControllers().update); //Update the details of place, using PUT '/api/v1/sponser/update'
Routers.put('/updatePicture/:id', FetchUser, SponserRole,UploadFile ,PlacesControllers().updatePicture); //Update the details of place, using PUT '/api/v1/sponser/updatePicture'
Routers.delete('/delete/:id', FetchUser, SponserRole ,PlacesControllers().delete); //Delete a place, using DELETE '/api/v1/sponser/delete'


module.exports = Routers