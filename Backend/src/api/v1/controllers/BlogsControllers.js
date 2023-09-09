//----------------- Initalzing or requiring the modals here 
const BlogsModel = require("../models/BlogsModel");
const BooksModel = require("../models/BooksModel");
const PlacesModel = require("../models/PlacesModel");

//------------- Creating the conrtollers to control this
function BlogsControllers() {
    return {

        //Fetch all the blogs if available, using GET '/api/v1/blogs/fetchAll'
        async fetchAllBlogs(req, res) {
            try {
                //-------- May be work as an searching also
                let { title, written_by, select, sort } = req.query;
                console.log(req.query);

                const queryObject = {};

                if (title) queryObject.title = { $regex: tile, $options: 'i' }
                if (written_by) { queryObject.written_by = { $regex: written_by, $options: 'i' } }

                //Finding the places we match the condition
                let blogs = await BlogsModel.find(queryObject);

                //Implment the sorting functionality
                if (sort) {
                    let sortfix = sort.replace(',', ' ');
                    blogs = await blogs.sort(sortfix)
                }

                if (select) {
                    let select = select.replace(',', ' ');
                    blogs = await blogs.select(select);
                }


                //Implement paging and limit functionality
                let page = Number(req.query.page) || 1;
                let limit = Number(req.query.limit) || 3;
                let skip = (page - 1) * limit;

                if (req.query.page) {
                    blogs = await blogs.skip(skip).limit(limit);
                }

                let data = await blogs;

                if (!blogs) return res.status(409).json({ success: false, msg: "Wd didn't find the blogs" });

                if (data.length == 0) return res.status(200).json({ success: true, msg: 'We have nothing to show the blogs' });

                return res.status(200).json({ success: true, msg: "Fetch all the blogs successfully", Length: data.length, data });

            } catch (error) { return res.status(500).json({ success: false, msg: error.message }); }
        },

        //Show details of one blog by the id, using GET '/api/v1/blog/showDetails/:id'
        async showDetails(req, res) {
            try {
                // console.log("show the places ", data, places);
                const blog = await BlogsModel.findById(req.params.id);
                if (!blog) return res.status(409).json({ success: false, msg: "Blog did'nt found" })

                return res.status(200).json({ success: true, msg: "Fetch the blog successfully", blog });

            } catch (error) { return res.status(500).json({ success: false, msg: error.message }); }
        },

        //Add a new blog by the user(sponser, admin), using POST '/api/v1/blog/addBlog'
        async addBlog(req, res) {
            try {
                const { title, description } = req.body;

                if (req.user.role == 'user')
                    return res.status(409).json({ success: false, msg: "Normal user can't add a blog" })

                if (!title || !description)
                    return res.status(409).json({ success: false, msg: 'All fields are required' });

                const blog = await BlogsModel.create({ title, description, written_by: req.user._id });
                await blog.save();

                return res.status(200).json({ success: true, msg: "Adding a new blog successfully", blog });

            } catch (error) { return res.status(500).json({ success: false, msg: error.message }); }
        },


        //Removing the blog, using DELETE '/api/v1/blog/removeblog/:id'
        async removeBlog(req, res) {
            try {
                
                if (req.user.role == 'user')
                    return res.status(409).json({ success: false, msg: "Normal user can't add a blog" })

                const removeBlog = await BlogsModel.deleteOne({ _id: req.params.id });

                if (!removeBlog) return res.status(409).json({ success: false, msg: "Can't removing the details of Blog" });

                return res.status(200).json({ success: true, msg: "Removing the details of the Blog place successfully" });

            } catch (error) { return res.status(500).json({ success: false, msg: error.message }); }
        },


        //Updating the details of the blogs, using PUT '/api/v1/blog/updateBlog'
        async updateBlog(req, res) {
            try {
                
                if (req.user.role == 'user')
                    return res.status(409).json({ success: false, msg: "Normal user can't add a blog" })

                const { title, description } = req.body;
                let data = {};

                if (title) data.title = title;
                if (description) data.description = description;

                //---------------- First find the place is exist
                const blog = await BlogsModel.updateOne({ _id: req.params.id }, { $set : data });
                // console.log('check place ', blog);

                if (!blog) return res.status(409).json({ success: false, msg: "Can't update the details of the blog" });

                return res.status(200).json({ success: true, msg: 'Updating the details of the blog successfully' });

            } catch (error) { return res.status(500).json({ success: false, msg: error.message }); }
        },
    }
}

module.exports = BlogsControllers;