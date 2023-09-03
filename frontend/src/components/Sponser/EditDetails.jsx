import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const EditDetails = () => {
    const token = localStorage.getItem('token');
    const {id} = useParams();

    const [place,setPlace] = useState();



    useEffect(async()=>{
        const res = await fetch(`${process.env.REACT_APP_API}sponser/fetchDetails/${id}`,{
            headers : {
                'auth-token' : token
            }
        });
        const data  = await res.json();
        console.log(data);
    })

    const [formData, setFormData] = useState({
        name: place.name,
        description: place.description,
        capacity: place.capacity,
        price: place.price,
        address: place.address,
        location: place.location,
        booking_slots: place.booking_slots,
        available: place.available,
      });
      const [loading, setLoading] = useState(false);

       // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };
  return (
    <>
      <section id="EditDetails">
        {/* Here is the form to updating the details of the place  */}
            <div className="container my-2 mx-auto bg-red-500">
            <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            minLength={5}
            maxLength={250}
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            rows="3"
            required
            minLength={9}
            maxLength={450}
            className="border p-2 w-full"
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="capacity" className="block text-sm font-medium">
            Capacity
          </label>
          <input
            type="number"
            id="capacity"
            name="capacity"
            value={formData.capacity}
            onChange={handleInputChange}
            required
            placeholder='Dont write wrong capacity'
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-sm font-medium">
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            placeholder='Write price only for one seat, we are calculate total'
            value={formData.price}
            onChange={handleInputChange}
            required
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="location" className="block text-sm font-medium">
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            required
            placeholder='Only write state,country or district of your place'
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="booking_slots" className="block text-sm font-medium">
            Booking Slots
          </label>
          <select
            id="booking_slots"
            name="booking_slots"
            value={formData.booking_slots}
            onChange={handleInputChange}
            className="border p-2 w-full"
          >
            <option name="booking_slots" value="morning">Morning</option>
            <option name="booking_slots" value="evening">Evening</option>
            <option name="booking_slots" value="night">Night</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block text-gray-700">Address</label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            minLength={10}
            maxLength={1000}
            placeholder='Write your detail address of location'
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Available</label>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="available"
              name="available"
              checked={formData.available}
              onChange={handleInputChange}
              className="mr-2"
            />
            <label htmlFor="available" className="text-sm">
              Yes, it's available
            </label>
          </div>
        </div>

        <div className="mt-4">
          {
            loading
              ? <div className='bg-slate-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full'><Loading /></div>
              :

              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full"
              >
                Update Details
              </button>
          }
        </div>
      </form>
            </div>
      </section>
    </>
  )
}

export default EditDetails
