import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';

//Redux Store Specific Stuff
import { useDispatch, useSelector } from 'react-redux';
import { setBooking } from '../../../Store/BookingSlice'

//Component
import Loading from '../../Layout/Loaders/Loading';
import Button from '../../Layout/Form/Button'

//APIs 
import sendNotification from '../../../apis/NotificationsApi';
import { BookingSlots, Purposes, Token } from '../../../GloballyFunctions';

const BookingForm = ({ id, findPlace }) => {

    // console.log('find place at book ', findPlace);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const user = useSelector(state => state.users.user);

    const [formData, setFormData] = useState({ //State to store form data
        name: user?.name || "",
        capacity: findPlace?.[0].capacity || '',
        booking_slots: findPlace?.[0].booking_slots || 'morning', // Default value
        purpose: findPlace?.[0].purpose || 'meeting',
        start_date: '',
        end_date: '',
        start_time: '',
        end_time: ''
    });

    const [loading, setLoading] = useState(false); //On load functionality


    //---------handle on change event of input
    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })


    //--------------- Function to handle form data submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // ---------- Stuff to booking by the users ---------X
        setLoading(true);

        // console.log('formdata and findPlace ',formData,findPlace);

        if (!findPlace || findPlace?.length === 0) {
            toast.error("We didn't find the place");
            navigate(-1);
        }

        //---------- Always try to book place by 1 capacity
        if (formData.capacity <= 0 || formData.capacity > findPlace?.[0].capacity) {
            toast.warn("Please fill valid capacity to processed");
            setFormData({ ...formData, capacity: '' });
            setLoading(false);
            return;
        }

        //--------------------- Find out the date difference is valid
        const today = new Date();
        const start_date = new Date(formData.start_date);

        const end_date = new Date(formData.end_date);

        // console.log('start_date and today  or result ',start_date,today,start_date<today);
        // return;

        if (start_date < today) {
            toast.warn("You can't choose date which is old from today");
            setFormData({ ...formData, start_date: '', end_date: ''});
            setLoading(false);
            return;
        }

        const timeDifference = end_date - start_date;
        const daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24));

        //Check the capacity is user filled is not more than findPlace
        if (daysDifference < 0) {
            toast.warn("You are filled wrong dates, please recorrect them");
            setFormData({ ...formData, start_date: '', end_date: '' });
            setLoading(false);
            return;
        }

        const totalPrice = Number(formData.capacity) * Number(findPlace[0]?.price);

        const usersData = {
            place_id: findPlace?.[0]._id,
            sponser_id: user?._id,
            capacity: formData.capacity,
            totalPrice,
            booking_slots: formData.booking_slots,
            start_time: formData.start_time,
            start_date: formData.start_date,
            end_time: formData.end_time,
            end_date: formData.end_date,
            purpose: formData.purpose
        }

        // console.log('user data ',usersData);
        // return;

        //---------------- Call the api to send the request to sponser for further procesuder
        try {
            if (!Token)
                navigate('/login');

            const res = await fetch(`${process.env.REACT_APP_API}book/makeRequest/${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': Token
                },
                body: JSON.stringify(usersData)
            });
            const data = await res.json();
            // console.log('check booking ', data);
            const booked = data.book;
            // console.log('check booked ',booked);

            // localStorage.setItem('booked', booked);

            dispatch(setBooking(booked));

            if (data.success === true) {

                // console.log('find place id ', findPlace?.[0]._id);

                //--- clients can successfully give the notification to the sponser
                const msg = {
                    title: `${user?.name} is want to book a place`,
                    message: `${user.name} is want to book a place with ${formData.capacity} capacity, and total price is ${totalPrice}.`,
                    sender: user._id,
                    receiver: findPlace?.[0].sponser_id,
                    place_id: findPlace?.[0]._id
                };

                // console.log('msg to send ', msg);

                await sendNotification(msg, findPlace?.[0].sponser_id);
                
                toast.success(data.msg);
                setLoading(false);

                navigate('/checkout');
            }

            else if (data.success === false) 
                toast.error(data.msg);

        } catch (error) {
            // console.log('error ', error);
            toast.error(error);
        }

        setLoading(false);
        setFormData({ name: '', capacity: '', purpose: '', booking_slots: '', start_date: '', start_time: '', end_date: '', end_time: '' });
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-semibold mb-4">Book  Space, To Make Yours</h1>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">

                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700">Name <span className='text-red-500'>*</span></label>
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
                    <label htmlFor="capacity" className="block text-gray-700">Capacity <span className='text-red-500'>*</span></label>
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
                    <label htmlFor="booking_slots" className="block text-gray-700">Choose Your Slot <span className='text-red-500'>*</span></label>
                    <select
                        id="booking_slots"
                        name="booking_slots"
                        value={formData.booking_slots}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border cursor-pointer border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        required
                    >
                        <option className='cursor-pointer' value="">Choose Your Slot:</option>
                        {BookingSlots.map((slots, index) => (
                            <option className='cursor-pointer  text-black' name="booking_slots" key={index} value={slots}>
                                {slots}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="mb-4">
                    <label htmlFor="purpose" className="block text-gray-700">Choose Your Space Type 🚀 <span className='text-red-500'>*</span></label>
                    <select
                        id="purpose"
                        name="purpose"
                        value={formData.purpose}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        required
                    >
                        <option className='cursor-pointer' value="">Choose Type Of Space:</option>
                        {Purposes.map((purpose, index) => (
                            <option className='cursor-pointer  text-black' name="purpose" key={index} value={purpose}>
                                {purpose}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="mb-4">
                    <label htmlFor="start_date" className="block text-gray-700 cursor-pointer">Start Date <span className='text-red-500'>*</span></label>
                    <input
                        type="date"
                        id="start_date"
                        name="start_date"
                        value={formData.start_date}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 cursor-pointer"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="end_date" className="block text-gray-700 cursor-pointer">End Date <span className='text-red-500'>*</span></label>
                    <input
                        type="date"
                        id="end_date"
                        name="end_date"
                        value={formData.end_date}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 cursor-pointer"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="start_time" className="block text-gray-700 cursor-pointer">Start Time <span className='text-red-500'>*</span></label>
                    <input
                        type="time"
                        id="start_time"
                        name="start_time"
                        value={formData.start_time}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 cursor-pointer"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="end_time" className="block text-gray-700 cursor-pointer">End Time <span className='text-red-500'>*</span></label>
                    <input
                        type="time"
                        id="end_time"
                        name="end_time"
                        value={formData.end_time}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 cursor-pointer"
                        required
                    />
                </div>

                <div className="mb-4">
                    {loading
                        ? <button className="w-full btn-primary py-2 rounded-md focus:outline-none " ><Loading /></button>
                        : <Button title={'Book Now'} />
                    }
                </div>


            </form>
        </div>
    );
};

export default BookingForm;
