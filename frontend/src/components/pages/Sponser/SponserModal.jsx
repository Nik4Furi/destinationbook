import React, { useState } from 'react';

import {Link} from 'react-router-dom'

import { toast } from 'react-toastify';

// import Loading from '../Loading'

const SponserModal = ({ isOpen, closeModal,id }) => {


  // const handleSave = () => {
  //   // You can add your logic here to save the data
  //   closeModal();
  // };

  return (
    <div className={`fixed inset-0 ${isOpen ? 'block' : 'hidden'} z-10 bg-gray-500 bg-opacity-50`}>
      <div className="modal-container">
        <div className="modal-content bg-white rounded-lg p-4">
        
          <div>

          {/* Tabs section to updating the data according tabs  */}
          <div className="flex items-center">
            <Link to={`/sponser/edit/details/${id} `}className="my-2 mx-2 text-slate-500">Details</Link>
            <Link to={`/sponser/edit/image/${id} `}className="my-2 mx-2 text-slate-500">Image</Link>
          </div>


            
          </div>
<h2 className="text-red-500 font-semibold">Hey gus</h2>
   
            {/* <form onSubmit={handleSave} className=''>
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

              <div className="flex justify-end">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mr-2" onClick={handleSave}>
                  Save
                </button>
                <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400" onClick={closeModal}>
                  Cancel
                </button>
              </div>
            </form> */}
        </div>
      </div>


    </div>
  );
};

export default SponserModal;
