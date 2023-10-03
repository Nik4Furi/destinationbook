//----------------- Initalzing or requiring the modals here 
const BooksModel = require("../models/BooksModel");
const PlacesModel = require("../models/PlacesModel");

//------------- Creating the conrtollers to control this
function BooksControllers() {
    return {

        //Fetch all the places if available, using GET '/api/v1/book/fetchPlaces'
        async fetchPlaces(req, res) {
            try {
                //-------- May be work as an searching also
                let { name, capacity, address, price, sort } = req.query;

                const queryObject = {};

                if (name) queryObject.name = { $regex: name, $options: 'i' }
                if (address) { queryObject.address = { $regex: address, $options: 'i' } }
                if (capacity) { queryObject.capacity = capacity }
                if (price) { queryObject.price = price }

                //Finding the places we match the condition
                let places = await PlacesModel.find(queryObject);

                //Implment the sorting functionality
                if (sort) {
                    let sortfix = sort.replace(',', ' ');
                    places = await places.sort(sortfix)
                }

                //Implement paging and limit functionality
                let page = Number(req.query.page) || 1;
                let limit = Number(req.query.limit) || 3;
                let skip = (page - 1) * limit;

                if (req.query.page) {
                    places = await places.skip(skip).limit(limit);
                }

                let data = await places;

                if (!places) return res.status(409).json({ success: false, msg: 'this is place is not find, please check again' });

                if (data.length == 0) return res.status(200).json({ success: true, msg: 'places are not exist', Length: data.length, data });

                return res.status(200).json({ success: true, msg: "Fetch all the places successfully", Length: data.length, data });

            } catch (error) { return res.status(500).json({ success: false, msg: error.message }); }
        },

        //Show one destination info according to id
        //Fetch all the places if available, using GET '/api/v1/book/fetchPlaces'
        async showDetails(req, res) {
            try {
                // console.log("show the places ", data, places);
                const place = await PlacesModel.findById(req.params.id);
                if (!place) return res.status(409).json({ success: false, msg: "Place did'nt found" })

                return res.status(200).json({ success: true, msg: "Fetch all the places successfully", place });

            } catch (error) { return res.status(500).json({ success: false, msg: error.message }); }
        },

        //Fetch all places which is booked by this user, using GET '/api/v1/book/fetchAllBooked'
        async FetchAllBooked(req, res) {
            try {
                // console.log("show the places ", data, places);
                // const places = await BooksModel.find({booked_by:req.user._id}).populate('place_id').select('place_id');
                const places = await BooksModel.find({ booked_by: req.user._id }).populate('place_id');
                if (!places) return res.status(409).json({ success: false, msg: "Place did'nt found" });
          

                return res.status(200).json({ success: true, msg: "Fetch all the places successfully", places });

            } catch (error) { return res.status(500).json({ success: false, msg: error.message }); }
        },


        //Removing the booked places, using DELETE '/api/v1/book/removeBooked/:id'
        async removeBooked(req, res) {
            try {
                const removeBooked = await BooksModel.deleteOne({ _id: req.params.id });

                if (!removeBooked) return res.status(409).json({ success: false, msg: "Can't removing the details of booked place" });

                return res.status(200).json({ success: true, msg: "Removing the details of the booked place successfully" });

            } catch (error) { return res.status(500).json({ success: false, msg: error.message }); }
        },

        //Make empty the booking, using DELETE '/api/v1/book/empty'
        async Empty(req, res) {
            try {
                const empty = await BooksModel.deleteMany({ booked_by: req.user._id });

                if (!empty) return res.status(409).json({ success: false, msg: "Can't removing the details of booked place" });

                return res.status(200).json({ success: true, msg: "Empty the booking document successfully" });

            } catch (error) { return res.status(500).json({ success: false, msg: error.message }); }
        },


        //Requesting to place book , using POST '/api/v1/book/makeRequest'
        async makeRequest(req, res) {
            try {
                //Get constraints from req.query
                const { place_id } = req.params;

                let date = new Date();
                // console.log('check date ', date);

                //Get constraints from req.body
                let { booking_slots, start_date, end_date, start_time, end_time, capacity, purpose } = req.body;

                if (!capacity || !start_date || !end_date || !start_time || !end_time || !booking_slots) return res.status(404).json({ success: false, msg: "All fields are required" })

                booking_slots = booking_slots.toLowerCase();
                purpose = purpose.toLowerCase();

                if (capacity <= 0) return res.status(409).json({ success: false, msg: "Capacity can't by less than 1" });

                //---------------- First find the place is exist
                const place = await PlacesModel.findById(place_id);

                if (!place) return res.status(409).json({ success: false, msg: 'this is place is not find, please check again' });

                //------------------ After find the place define the criteria about the date of start and end
                // console.log(start_date, end_date, start_time, end_time);

                const totalPrice = place.price * capacity;
                // console.log('total ', totalPrice);

                const book = await BooksModel.create({
                    place_id, booked_by: req.user._id, capacity, booking_slots, start_date, end_date, start_time, end_time, purpose, totalPrice
                });

                place.noOfTimeBooking += 1;

                await place.save();

                return res.status(200).json({ success: true, msg: 'You booking place is now pending, please wait from the sponser to processed, ', book });

            } catch (error) { return res.status(500).json({ success: false, msg: error.message }); }
        },

        //------------------------ Sponser Other Routes Related to booking places-------X
        //Processed the success request of the place, using PUT '/api/v1/sponser/successRequest'
        async successRequest(req, res) {
            try {
                //--------------- Find the place according to the id
                let book = await BooksModel.findOne({ place_id: req.params.place_id });


                if (!book) return res.status(404).json({ success: false, msg: "Can't find the booked place, please check again" });


                book.status = "success";
                await book.save();

                // console.log('successing request of teh booking ', book);

                return res.status(200).json({ success: true, msg: 'Requesting of place for booking is successed', book });

                //After this send request the user;

            } catch (error) { return res.status(500).json({ success: false, msg: error.message }) }
        },

        //Processed the cancel request of the place, using PUT '/api/v1/sponser/cancelRequest'
        async cancelRequest(req, res) {
            try {
                //--------------- Find the place according to the id
                let book = await BooksModel.findOne({ place_id: req.params.place_id });

                if (!book) return res.status(404).json({ success: false, msg: "Can't find the booked place, please check again" });

                book.status = "cancel";
                await book.save();

                // console.log('cancel the request ', book);

                return res.status(200).json({ success: true, msg: 'Cancelling of the clients request', book });

                //After this send request the user who is requesting for booking;

            } catch (error) { return res.status(500).json({ success: false, msg: error.message }) }
        }
    }
}

module.exports = BooksControllers;