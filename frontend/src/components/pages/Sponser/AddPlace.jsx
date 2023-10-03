import React, { useEffect, useState } from 'react';

import { toast } from 'react-toastify';

// Globall Functions Stuff
import { BookingSlots, Cities, Purposes, Token } from '../../../GloballyFunctions';

//Components Stuff
import Loading from '../../Layout/Loaders/Loading'

function AddPlaceForm() {


 //State to handle the form data -----------------
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    file: null,
    capacity: '',
    price: '',
    purpose: '',
    booking_slots: 'morning',
    farFromMetro: '',
    city: '',
    address: '',
    available: false
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

  //------------------------- Keywords Specific Stuff to store the keywords --------X
  // const [inputValue, setInputValue] = useState('');
  // const [keywords, setKeywords] = useState([]);

  // const handleInputKeywordChange = (e) => {
  //   setInputValue(e.target.value);
  // };

  // const handleInputKeyDown = (e) => {
  //   if (e.key === 'Enter' || e.key === ',') {
  //     // Prevent adding empty or duplicate keywords
  //     if (inputValue.trim() !== '' && !keywords.includes(inputValue.trim())) {
  //       setKeywords([...keywords, inputValue.trim()]);
  //     }
  //     setInputValue('');
  //   }
  // };

  // const handleRemoveKeyword = (index) => {
  //   const updatedKeywords = [...keywords];
  //   updatedKeywords.splice(index, 1);
  //   setKeywords(updatedKeywords);
  // };

  //------------- Function to handle the form data to add new place 
  const handleSubmit = async (e) => {
    e.preventDefault();

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

    if (Number(!formData.farFromMetro) < 0) {
      toast.error("Distance can't be negative");
      setFormData({ ...formData, farFromMetro: '' });
      setLoading(false);
      return;
    }

    // if (!formData.file) {
    //   toast.warn("This image format can't support");
    //   setFormData({ ...formData, file: '' });
    //   setLoading(false);
    //   return;
    // }

    let addPlaceData = new FormData();
    addPlaceData.append('name', formData.name);
    addPlaceData.append('description', formData.description);
    addPlaceData.append('file', formData.file);
    addPlaceData.append('capacity', formData.capacity);
    addPlaceData.append('price', formData.price);
    addPlaceData.append('address', formData.address);
    addPlaceData.append('city', formData.city);
    addPlaceData.append('purpose', formData.purpose);
    addPlaceData.append('booking_slots', formData.booking_slots);
    addPlaceData.append('available', formData.available);
    addPlaceData.append('farFromMetro', formData.farFromMetro);
    // addPlaceData.append('keywords', keywords);


    // console.log('form data ', formData);

    // console.log('addplac edata ',addPlaceData);

    //---------------- Call the api to adding new images
    try {
      // const token = localStorage.getItem('token');
      
      const res = await fetch(`${process.env.REACT_APP_API}sponser/add`, {
        method: 'POST',
        headers: {
          'auth-token': Token
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
      // console.log('error ', error);
      toast.error(error);
    }
    setLoading(false);
    setFormData({
      name: '',
      description: '',
      file: null,
      capacity: '',
      price: '',
      address: '',
      city: '',
      purpose: '',
      booking_slots: 'morning',
      available: false,
      farFromMetro: ''
    });
    // setKeywords([]);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-slate-100">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium">
            Name <span className='text-red-500'>*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder='Write catchy name of the place'
            required
            minLength={5}
            maxLength={250}
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium">
            Description <span className='text-red-500'>*</span>
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder='Describe your place details so give the meaning to client why need to book'
            rows="6"
            required
            minLength={9}
            maxLength={450}
            className="border p-2 w-full"
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="file" className="block text-sm font-medium">
            Image <span className='text-red-500'>*</span>
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
            Capacity <span className='text-red-500'>*</span>
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
            Price <span className='text-red-500'>*</span>
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
          <label htmlFor="farFromMetro" className="block text-sm font-medium">
            How Far From Metro/Station/Subways <span className='text-red-500'>*</span>
          </label>
          <input
            type="Number"
            id="farFromMetro"
            name="farFromMetro"
            value={formData.farFromMetro}
            onChange={handleInputChange}
            required
            placeholder='Write distance in kilo meter'
            className="border p-2 w-full"
          />
        </div>

        <div className='mb-4'>
          <label htmlFor="purpose" className="block my-2 text-black">
            Choose Type Of Space <span className='text-red-500'>*</span>
          </label>
          <select
            id="purpose"
            name='purpose'
            className="w-full text-black rounded-lg p-3 border border-black focus:outline-none cursor-pointer focus:border-red-500"
            value={formData.purpose}
            onChange={handleInputChange}
          >
            <option className='cursor-pointer' value="">Choose Type Of Space:</option>
            {Purposes.map((purpose, index) => (
              <option className='cursor-pointer  text-black' key={index} value={purpose}>
                {purpose}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="booking_slots" className="block text-sm font-medium">
            Booking Slots <span className='text-red-500'>*</span>
          </label>
          <select
            id="booking_slots"
            name="booking_slots"
            value={formData.booking_slots}
            onChange={handleInputChange}
            className="border p-2 w-full cursor-pointer"
          >
            <option className='cursor-pointer' value="">Choose Slots:</option>
            {BookingSlots.map((slots, index) => (
              <option className='cursor-pointer  text-black' key={index} value={slots}>
                {slots}
              </option>
            ))}
          </select>
        </div>
        <div className='mb-4'>
          <label htmlFor="city" className="block  my-2 text-black">
            Choose Prefered City <span className='text-red-500'>*</span>
          </label>
          <select
            id="city"
            name='city'
            className="w-full rounded-lg text-black p-3 border border-black focus:outline-none cursor-pointer focus:border-red-500"
            value={formData.city}
            onChange={handleInputChange}
          >
            <option className='cursor-pointer' value="">Choose City</option>
            {Cities.map((data, index) => (
              <option className='cursor-pointer' key={index} value={data}>
                {data}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block text-gray-700">Address <span className='text-red-500'>*</span></label>
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
        {/* Keywords Components to storing keywords  */}
        {/* <KeywordInput /> */}
        {/* <div className="mb-4">
          <input
            type="text"
            placeholder="Add keywords (separate with commas)"
            className="border p-2 w-full"
            value={inputValue}
            onChange={handleInputKeywordChange}
            onKeyDown={handleInputKeyDown}
          />
        </div> */}

        {/* <div className='mb-4'>
          {keywords.map((keyword, index) => (
            <span
              key={index}
              className="bg-blue-500 text-white px-2 py-1 rounded-full text-sm m-1 cursor-pointer"
              onClick={() => handleRemoveKeyword(index)}
            >
              {keyword} <span className="ml-1">&#10005;</span>
            </span>
          ))}
        </div> */}

        <div className="mb-4">
          <label className="block text-sm font-medium">Available <span className='text-red-500'>*</span></label>
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
