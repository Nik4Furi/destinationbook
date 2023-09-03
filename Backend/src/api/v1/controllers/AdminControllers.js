//----------------- Initalzing or requiring the modals here 
const NotificationModel = require("../models/NotificationModel");
const UsersModel = require("../models/UsersModel");

//------------- Creating the conrtollers to control notifications
function AdminControllers() {
    return {

        //adding a new notification , using POST '/api/v1/notification/add'
        // async add(req, res) {
        //     try {

        //         const { title, message } = req.body;

        //         if (!title || !message) return res.status(409).json({ success: false, msg: 'All fields are required' })

        //         const notification = await NotificationModel.create({
        //             title, message, sender: req.user._id,receiver:req.params.id
        //         });

        //         return res.status(200).json({ success: true, msg: 'Adding a new notification successfully', notification });

        //     } catch (error) { return res.status(500).json({ success: false, msg: error, message }); }
        // },

        //Fetch all the users, using GET '/api/v1/admin/fetch'
        async fetchAllUsers(req, res) {
            try {

                const users = await UsersModel.find().sort({ createdAt: -1 })

                return res.status(200).json({ success: true, msg: 'Fetch all the users successfully', users });

            } catch (error) { return res.status(500).json({ success: false, msg: error, message }); }
        },

        //Delete a user , using DELETE '/api/v1/admin/deleteUser/:id'
        async deleteUser(req, res) {
            try {

                const user = await UsersModel.deleteOne({ _id: req.params.id })

                if (!user) return res.status(404).json({ success: false, msg: "Can't delete the users details" })

                return res.status(200).json({ success: true, msg: 'Delete the  user successfully' });

            } catch (error) { return res.status(500).json({ success: false, msg: error, message }); }
        },

        //Update role of user , using PUT '/api/v1/admin/updateRole/:id'
        async updateRole(req, res) {
            console.log(req.body);
            try {
                const {role} = req.body;

                // const user = await UsersModel.updateOne({_id:req.params.id}, { $set: { role: role }},{new:true} );

                // if(!user || user.modifiedCount == 0)
                //     return res.status(409).json({success:false,msg:"Error to update the role of user, plese try again"})

                // const user = await UsersModel.findById(req.params.id);

                const user = await UsersModel.updateOne({_id:req.params.id},{$set:{role:role}},{new:true});

                console.log('users role ',user);

                return res.status(200).json({ success: true, msg: 'Updating the role of user successfully' });

            } catch (error) { return res.status(500).json({ success: false, msg: error, message }); }
        },
    }
}

module.exports = AdminControllers;