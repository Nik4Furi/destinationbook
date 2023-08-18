//----------------- Initalzing or requiring the modals here 
const PlacesModel = require("../models/PlacesModel");

const cloudinary = require('cloudinary');
const getDataUri = require('../utlils/DataUri');

//------------- Creating the conrtollers to control this
function PlacesControllers() {
    return {

        //Fetch all the places , using GET '/api/v1/place/fetch'
        async fetch(req, res) {
            try {
                //-------- May be work as an searching also
                let { name, capacity, address, price } = req.query;
                console.log(req.query);

                //Finding the places we match the condition
                let places = await PlacesModel.find({sponser_id:req.user.id});
                // let places = await PlacesModel.find({
                //     sponser_id: req.user._id,
                //     $or: [
                //         { name }, { capacity }, { price }, { address }
                //     ]
                // }).where('available').equals(true);

                console.log('check places ', places);

                return res.status(200).json({ success: true, msg: 'fetching the places', length:places.length,places });

            } catch (error) { return res.status(500).json({ success: false, msg: error.message }) }
        },

        //Adding a new place, using POST '/api/v1/place/add'
        async add(req, res) {
            try {
                //--------- Req.body content
                const { name, description, capacity, price, booking_slots, address, available } = req.body;

                //Requring all the specific fields
                if (!name || !description || !capacity || !price || !booking_slots || !address) { return res.status(404).json({ success: false, msg: "All fields are required" }) };

                if (capacity < 0)
                    return res.status(404).json({ success: false, msg: "Capacity can't be negative " })

                if (price < 0)
                    return res.status(404).json({ success: false, msg: "Price can't be negative " })

                // Adding the images in database
                const file = req.file;

                if (!file) return res.status(409).json({ success: false, msg: 'Please uplaod a image for showcase' });

                //Now upload the file in cloudinary
                const fileUri = await getDataUri(file);

                const myCloud = await cloudinary.v2.uploader.upload(fileUri.content);

                const totalPrice = Number(Number(capacity) * Number(price));


                const place = await PlacesModel.create({
                    name, description, price, address, capacity, sponser_id: req.user._id, booking_slots, available, picture: {
                        public_id: myCloud.public_id, url: myCloud.secure_url
                    },totalPrice
                })

                return res.status(200).json({ success: true, msg: 'Adding a new place successfully ', place });


            } catch (error) { return res.status(500).json({ success: false, msg: error.message }) }
        },

        //Updating information of the place, using PUT '/api/v1/place/update'
        async update(req, res) {
            try {

                //--------- Req.body content
                const { name, description, capacity, price, booking_slots, address, available } = req.body;

                //--------------- Find the place according to the id
                let place = await PlacesModel.findOne({ sponser_id: req.user._id, _id: req.params.id });

                console.log('check place ', place);

                if (!place || place.length == 0) return res.status(404).json({ success: false, msg: "Can't find the place, please check again" });

                //According users changing availablity change that fields
                if (name) place.name = name;
                if (description) place.description = description;
                if (capacity) place.capacity = capacity;
                if (price) place.price = price
                if (address) place.address = address;
                if (booking_slots) place.booking_slots = booking_slots;
                if (available) place.available = available;

                await place.save();

                return res.status(200).json({ success: true, msg: 'Updating the details of the place', place });


            } catch (error) { return res.status(500).json({ success: false, msg: error.message }) }
        },

        //Updating information of the place, using PUT '/api/v1/place/update'
        async updatePicture(req, res) {
            try {

                //--------------- Find the place according to the id
                let place = await PlacesModel.findOne({ sponser_id: req.user._id, _id: req.params.id });

                if (!place || place.length == 0) return res.status(404).json({ success: false, msg: "Can't find the place, please check again" });

                //Check is upload file or not
                const file = req.file;
                if (!file) return res.status(401).json({ success: false, msg: "Can't upload file, please try again if needed" })

                //if file exist then first we delete ole file then we update other one
                console.log('check place ', place, place.picture.public_id)
                await cloudinary.v2.uploader.destroy(place.picture.public_id);

                const fileUri = await getDataUri(file);

                const myCloud = await cloudinary.v2.uploader.upload(fileUri.content);

                place.picture = {
                    public_id: myCloud.public_id, url: myCloud.secure_url
                }

                await place.save();

                return res.status(200).json({ success: true, msg: 'Updating the images successfully', place });


            } catch (error) { return res.status(500).json({ success: false, msg: error.message }) }
        },

        //Delete a place detail by the sponsers, using DELETE '/api/v1/place'
        async delete(req, res) {
            try {
                //--------------- Find the place according to the id
                let place = await PlacesModel.findOne({ _id: req.params.id, sponser_id: req.user._id });

                if (!place || place.length == 0) return res.status(404).json({ success: false, msg: "Can't find the place, please check again" });

                //After finding the place delete all the pictures
                // await cloudinary.v2.uploader.destroy(place.picture.public_id)

                cloudinary.v2.uploader.destroy(place.picture.public_id, function(error,result) {
                    console.log("check result and error ",result, error) }) 

                
                // console.log(place, place.picture.url, place.picture.public_id);

                await PlacesModel.deleteMany({ _id: req.params.id,sponser_id:req.user._id });
                // place.remove();

                return res.status(200).json({ success: true, msg: 'Delete the place details successfully' })


            } catch (error) { return res.status(500).json({ success: false, msg: error.message }) }
        },


    }
}

module.exports = PlacesControllers;