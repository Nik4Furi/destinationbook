const Routers = require('express').Router();

//------------------------  Initialzing your controllers here -------------X



//----------------------- INitizlalzing your apis's routes here --------------------X
Router.get('/',Controllers().Home); // Showing our home page, using GET '/api

module.exports = Routers