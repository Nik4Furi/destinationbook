import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';

import { useDispatch, useSelector } from 'react-redux';
import {setBooking} from '../../Store/BookingSlice'

import Loading from '../Loading';

import sendNotification from '../../apis/NotificationsApi';

const BookingForm = ({ id,findPlace }) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const places = useSelector(state => state.places);
    const user = useSelector(state => state.users);

    const [formData, setFormData] = useState({ //State to store form data
        name: user?.user?.name || "",
        capacity: '',
        booking_slots: 'morning', // Default value
        bookForWhat: 'meeting',
        start_date: '',
        end_date: '',
        start_time: '',
        end_time: ''
    });
      const [loading, setLoading] = useState(false); //On load functionality


    //---------handle on change event of input
    const handleChange = (e) => setFormData({...formData,[e.target.name]:e.target.value})
    
  
    //--------------- Function to handle form data submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        console.log('find place ',findPlace)

        //------------ Filtering the places where the id is match
        // const findPlace = places.places.filter(item => (item._id === id));

        // console.log('formdata and findPlace ',formData,findPlace);

        if (!findPlace || findPlace?.length === 0) {
            toast.error("We didn't find the place");
            navigate(-1);
        }

        //Check the capacity is user filled is not more than findPlace
        if (formData.capacity > findPlace[0]?.capacity) {
            toast.warn("Capacity can't more than place capacity");
            setFormData({
                name: formData.name,
                capacity: '',
                booking_slots: formData.booking_slots, // Default value
                bookForWhat: formData.bookForWhat,
                start_date: formData.start_date,
                end_date: formData.end_date,
                start_time: formData.start_time,
                end_time: formData.end_time
            });

            setLoading(false);
            return;
        }

        //---------- Always try to book place by 1 capacity
        if (formData.capacity <= 0) {
            toast.warn("Please fill valid capacities");
            setFormData({
                name: formData.name,
                capacity: '',
                booking_slots: formData.booking_slots, // Default value
                bookForWhat: formData.bookForWhat,
                start_date: formData.start_date,
                end_date: formData.end_date,
                start_time: formData.start_time,
                end_time: formData.end_time
            });

            setLoading(false);
            return;
        }

        //--------------------- Find out the date difference is valid
        const today = new Date();
        const start_date = new Date(formData.start_date);
        
        const end_date = new Date(formData.end_date);

        // if(start_date < today ){
        //     toast.warn("You can't choose date which is old from today");
        //     setFormData({
        //         name: formData.name,
        //         capacity: formData.capacity,
        //         booking_slots: formData.booking_slots, // Default value
        //         bookForWhat: formData.bookForWhat,
        //         start_date: '',
        //         end_date: '',
        //         start_time: formData.start_time,
        //         end_time: formData.end_time
        //     });

        //     setLoading(false);
        //     return;
        // }

        const timeDifference = end_date - start_date;
        const daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24));

        //Check the capacity is user filled is not more than findPlace
        if (daysDifference < 0) {
            toast.warn("You are filled wrong dates, please recorrect them");
            setFormData({
                name: formData.name,
                capacity: formData.capacity,
                booking_slots: formData.booking_slots, // Default value
                bookForWhat: formData.bookForWhat,
                start_date: '',
                end_date: '',
                start_time: formData.start_time,
                end_time: formData.end_time
            });

            setLoading(false);
            return;
        }

        const totalPrice = Number(formData.capacity) * Number(findPlace[0]?.price);

        const usersData = {
            place_id: findPlace[0]._id,
            sponser_id: user.user._id,
            capacity: formData.capacity,
            totalPrice,
            booking_slots: formData.booking_slots,
            start_time: formData.start_time,
            start_date: formData.start_date,
            end_time: formData.end_time,
            end_date: formData.end_date,
            bookForWhat: formData.bookForWhat
        }

        //---------------- Call the api to send the request to sponser for further procesuder
        try {
            const token = localStorage.getItem('token');
            if (!token)
                navigate('/login');

            const res = await fetch(`${process.env.REACT_APP_API}book/makeRequest/${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': token
                },
                body: JSON.stringify(usersData)
            });
            const data = await res.json();
            console.log('check booking ', data);

            localStorage.setItem('booking',data.book);

            dispatch(setBooking(data.book));

            if (data.success === true) {              
              
                //--- clients can successfully give the notification to the sponser
                const msg = {
                    title : `${user.user.name} is want to book a place`,
                    message: `${user.user.name} is want to book a place with ${formData.capacity} capacity, and total price is ${totalPrice}.`,
                    sender: user.user._id,
                    receiver: findPlace[0].sponser_id
                };

                await sendNotification(msg,findPlace[0].sponser_id);
                toast.success(data.msg);
                setLoading(false);

                navigate('/checkout');
            }
            else if (data.success === false) {
                toast.error(data.msg);
            }

        } catch (error) {
            console.log('error ', error.message);
            toast.error(error.message);
        }
        setLoading(false);
        setFormData({name:'',capacity:'',bookForWhat:'',booking_slots:'',start_date:'',start_time:'',end_date:'',end_time:''});
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-semibold mb-4">Book  Space, To Make Yours</h1>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">

                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="capacity" className="block text-gray-700">Capacity</label>
                    <input
                        type="number"
                        id="capacity"
                        name="capacity"
                        value={formData.capacity}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        required

                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="booking_slots" className="block text-gray-700">Booking Slot</label>
                    <select
                        id="booking_slots"
                        name="booking_slots"
                        value={formData.booking_slots}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        required
                    >
                        <option name="booking_slots" value="morning">Morning</option>
                        <option name="booking_slots" value="evening">Evening</option>
                        <option name="booking_slots" value="night">Night</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label htmlFor="bookForWhat" className="block text-gray-700">Book For What</label>
                    <select
                        id="bookForWhat"
                        name="bookForWhat"
                        value={formData.bookForWhat}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        required
                    >
                        <option name="bookForWhat" value="meeting">Meeting</option>
                        <option name="bookForWhat" value="travelling">Travelling</option>
                        <option name="bookForWhat" value="stay">Stay</option>
                        <option name="bookForWhat" value="other">Other</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label htmlFor="start_date" className="block text-gray-700">Start Date</label>
                    <input
                        type="date"
                        id="start_date"
                        name="start_date"
                        value={formData.start_date}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="end_date" className="block text-gray-700">End Date</label>
                    <input
                        type="date"
                        id="end_date"
                        name="end_date"
                        value={formData.end_date}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="start_time" className="block text-gray-700">Start Time</label>
                    <input
                        type="time"
                        id="start_time"
                        name="start_time"
                        value={formData.start_time}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="end_time" className="block text-gray-700">End Time</label>
                    <input
                        type="time"
                        id="end_time"
                        name="end_time"
                        value={formData.end_time}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>

                <div className="mb-4">
                    {
                        loading
                            ? <button
                                type="submit"
                                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                            >
                                <Loading />
                            </button>
                            : <button
                                type="submit"
                                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                            >
                                Book Now
                            </button>
                    }


                </div>
            </form>
        </div>
    );
};

export default BookingForm;
