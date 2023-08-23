import React, { useState } from 'react';

const BookingForm = () => {
    const [formData, setFormData] = useState({
        name: 'User_name',
        capacity: '',
        booking_slots: 'morning', // Default value
        bookForWhat: 'meeting',
        start_date: '',
        end_date: '',
        start_time: '',
        end_time: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // You can handle form submission here, such as sending data to the server
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formData);

        // during submitting the form what we have extra 
        //place_id, sponser_id, 

        //check difference b/w start&end date, also check start time and end time
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
                        readOnly
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
                        <option   name="booking_slots" value="morning">Morning</option>
                        <option   name="booking_slots" value="evening">Evening</option>
                        <option   name="booking_slots" value="night">Night</option>
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
                        <option  name="bookForWhat" value="stay">Stay</option>
                        <option  name="bookForWhat" value="other">Other</option>
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
                    <label htmlFor="price" className="block text-gray-700">Total Price</label>
                    <input
                        type="text"
                        id="price"
                        name="price"
                        value={34029}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        required
                        readOnly
                    />
                </div>

                <div className="mb-4">
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                    >
                        Book Now
                    </button>
                </div>
            </form>
        </div>
    );
};

export default BookingForm;
