import React, { useEffect, useState } from 'react';

import { toast } from 'react-toastify';

import Loading from '../Loading'

function AddPlaceForm() {
  const searchParams = new URLSearchParams(document.location.search)
  console.log(searchParams.get('data'));

  useEffect(()=>{
    if (searchParams.get('data')) {
      //Call api to fetch data
      

    
    }
  },[])


  // State to manage form inputs
 
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    file: null,
    capacity: '',
    price: '',
    address: '',
    location: '',
    booking_slots: 'morning',
    available: false,
  });
  const [loading, setLoading] = useState(false);


  const imgTypes = ["image/jpeg", "image/jpg", "image/png", "image/gif", "image/webp", "image/avif"]

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Handle image upload
  const handleImageUpload = (e) => {
    const imageFile = e.target.files[0];
    // console.log('files ',e.target.files);

    if (imgTypes.includes(imageFile.type) === false) {
      toast.warn("This image format can't support");
      return;
    }

    // console.log(imgTypes.includes(imageFile.type));


    setFormData((prevData) => ({
      ...prevData,
      file: imageFile,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form data submission here
    // console.log(formData);
    setLoading(true);

    if (Number(formData.capacity) < 0) {
      toast.error("Capacity can't be negative");
      setFormData({ ...formData, capacity: '' });
      setLoading(false);
      return;
    }

    if (Number(formData.price) < 0) {
      toast.error("Price can't be negative");
      setFormData({ ...formData, price: '' });
      setLoading(false);
      return;
    }

    if (!formData.file) {
      toast.warn("This image format can't support");
      setFormData({ ...formData, file: '' });
      setLoading(false);
      return;
    }

    let addPlaceData = new FormData();
    addPlaceData.append('name', formData.name);
    addPlaceData.append('description', formData.description);
    addPlaceData.append('file', formData.file);
    addPlaceData.append('capacity', formData.capacity);
    addPlaceData.append('price', formData.price);
    addPlaceData.append('address', formData.address);
    addPlaceData.append('location', formData.location);
    addPlaceData.append('booking_slots', formData.booking_slots);
    addPlaceData.append('available', formData.available);

    console.log('form data ', formData);

    // console.log('addplac edata ',addPlaceData);

    //---------------- Call the api to adding new images
    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`${process.env.REACT_APP_API}sponser/add`, {
        method: 'POST',
        headers: {
          'auth-token': token
        },
        body: addPlaceData
      });
      const data = await res.json();
      // console.log('data is ', data);

      if (data.success === true) {
        toast.success(data.msg);
      }

      else if (data.success === false) {
        toast.error(data.msg);
      }

    } catch (error) {
      console.log('error ', error);
      toast.error(error.message);
    }
    setLoading(false);
    setFormData({
      name: '',
      description: '',
      file: null,
      capacity: '',
      price: '',
      address: '',
      location: '',
      booking_slots: 'morning',
      available: false,
    })
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-slate-100">
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
          <label htmlFor="file" className="block text-sm font-medium">
            Image
          </label>
          <input
            type="file"
            id="file"
            name="file"
            onChange={handleImageUpload}
            accept="image/*"
            className="border p-2 w-full"
          />
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
                Add New Place
              </button>
          }
        </div>
      </form>
    </div>
  );
}

export default AddPlaceForm;
