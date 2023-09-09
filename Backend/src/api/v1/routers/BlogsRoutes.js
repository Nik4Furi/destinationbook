const Routers = require('express').Router();

//------------------------  Initialzing your controllers here -------------X
const BlogsControllers = require('../controllers/BlogsControllers');

const FetchUser = require('../middlewares/FetchUser'); //Fetch the user token


//----------------------- Initizlalzing your apis's routes here --------------------X
Routers.get('/fetch',BlogsControllers().fetchAllBlogs); //Fetching all the blogs only availables, using GET '/api/v1/blog/fetch'

Routers.get('/showDetails/:id',BlogsControllers().showDetails); //Showing the details of the blog, using GET '/api/v1/blog/showDetails/:id'

Routers.delete('/removeBlog/:id',FetchUser,BlogsControllers().removeBlog); //Removing the blog, using DELETE '/api/v1/blog/removeBlog/:id'

Routers.post('/addBlog',FetchUser,BlogsControllers().addBlog); //Adding a new blog, using POST '/api/v1/blog/addBlog'

Routers.put('/updateBlog/:id', FetchUser, BlogsControllers().updateBlog); //update the details of the blogs, using PUT '/api/v1/blog/updateBlog/:id'



module.exports = Routers