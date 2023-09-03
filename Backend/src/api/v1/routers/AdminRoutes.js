const Routers = require('express').Router();

const AdminControllers = require('../controllers/AdminControllers');

//------------------------  Initialzing your controllers here -------------X
const FetchUser = require('../middlewares/FetchUser'); //Fetch details of the user
const AdminRole = require('../middlewares/AdminRole'); //Fetch details of the role of sponser only can proceesed further

//----------------------- Initizlalzing your apis's routes here --------------------X
Routers.get('/fetch', FetchUser, AdminRole ,AdminControllers().fetchAllUsers); //Fetch all the users, using GET '/api/v1/admin/fetch'
Routers.put('/updateRole/:id', FetchUser, AdminRole ,AdminControllers().updateRole); //updating user role, using PUT '/api/v1/admin/updateRole/:id'
Routers.delete('/deleteUser/:id', FetchUser, AdminRole ,AdminControllers().deleteUser); //Delete the user, using DELETE '/api/v1/admin/deleteUser/:id'

// Routers.post('/add', FetchUser, SponserRole,UploadFile ,PlacesControllers().add); //add a new places, using POST '/api/v1/sponser/add'
// Routers.put('/update/:id', FetchUser, SponserRole ,PlacesControllers().update); //Update the details of place, using PUT '/api/v1/sponser/update'
// Routers.put('/updatePicture/:id', FetchUser, SponserRole,UploadFile ,PlacesControllers().updatePicture); //Update the details of place, using PUT '/api/v1/sponser/updatePicture'
// Routers.delete('/delete/:id', FetchUser, SponserRole ,PlacesControllers().delete); //Delete a place, using DELETE '/api/v1/sponser/delete'


module.exports = Routers