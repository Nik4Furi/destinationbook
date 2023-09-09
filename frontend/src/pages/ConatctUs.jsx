import React, { useState } from 'react';

import { useSelector } from 'react-redux';

import {toast} from 'react-toastify'

import sendNotification from '../apis/NotificationsApi'

import Loading from '../components/Loading'

const ContactUs = () => {
  //----------- Admin details where we send the notification for conatct us
  const  adminID = process.env.REACT_APP_ADMIN_ID,adminEmail = process.env.REACT_APP_ADMIN_EMAIL;

  const user = useSelector(state => state.users.user);

  const [formData, setFormData] = useState({
    name: '',
    contact: '', // email or phone
    concern: '',
  });
  const [loading,setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    // You can handle form submission here, such as sending data to the server

    console.log(formData);
    setLoading(true);

    //--------- Now send the msg to admin for contact
    const msg = {
      title: `${user.name} Is Want To Contact With US`,
      message: `${formData.contact} is write the concern, please read out ${formData.concern}`,
      sender: user._id,
      receiver: adminID
    };

    try {
    await sendNotification(msg,adminID);
      
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }

    setLoading(false);
    setFormData({name:'',concern:'',contact:''});

  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl text-center font-semibold mb-4">Contact With Us</h1>
      <p className='text-center my-2'>If you have any query , please feel free to contact with us, we will help to mesaure your concern seriously</p>
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
          <label htmlFor="contact" className="block text-gray-700">Email/Phone</label>
          <input
            type="text"
            id="contact"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="concern" className="block text-gray-700">Concern</label>
          <textarea
            id="concern"
            name="concern"
            value={formData.concern}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            rows="4"
            required
          ></textarea>
        </div>
        <div className="mb-4">
       { loading ? <Loading/>
       :
         <button
            type="submit"
            className="w-full btn-primary py-2 rounded-md focus:outline-none"
          > Send Details </button>}
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
