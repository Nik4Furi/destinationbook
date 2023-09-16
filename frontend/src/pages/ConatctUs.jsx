import React, { useState } from 'react';

//StyleSheet
import '../styles/ContactUs.module.css'

import { useSelector } from 'react-redux';

import { toast } from 'react-toastify'

import sendNotification from '../apis/NotificationsApi'

import Loading from '../components/Loading'

// import Contact from '../assets/contact.jpg'
import mail from '../assets/Footer/mail.png'
import phone from '../assets/Footer/call.png'
import contact_img from '../assets/contact.jpg'


const ContactUs = () => {
  //----------- Admin details where we send the notification for conatct us
  const adminID = process.env.REACT_APP_ADMIN_ID, adminEmail = process.env.REACT_APP_ADMIN_EMAIL;

  const user = useSelector(state => state.users.user);

  const [formData, setFormData] = useState({
    name: '',
    contact: '', // email or phone
    concern: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    // const { name, value } = e.target;
    // setFormData({ ...formData, [name]: value });
    setFormData({...formData,[e.target.name]:e.target.value})
  };

  const handleSubmit = async (e) => {
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
      await sendNotification(msg, adminID);

    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }

    setLoading(false);
    setFormData({ name: '', concern: '', contact: '' });

  };

  return (
    // <div className="container mx-auto p-4">

    // </div>
    <>

      <section id="ContactUs">

        {/* Here the container to show the image and text to get in touch  */}
        {/* <div className='m-0 p-0 h-[30vh] w-full' style={{background:'url(../assets/contact.jpg)'}}>


    <div className="container py-2 px-auto">
      <h1 className="text-3xl">Get In Touch</h1>

    </div>


        </div> */}

<div className="flex items-center bg-gray-800 text-white">
      <div className="flex items-center justify-round">
       <div className="container mx-2 my-4 py-10 px-10">
        <div className="flex flex-col items-center">
        <h1 className=" font-bold text-4xl text-highlight my-2">Get In Touch</h1>
        <p className="text-lg my-1">Want to get in touch ? We'd love to hear from you. Here how you can react us...</p>
      <a href="#ContactButton"> <button className="btn-secondary my-3">Contact US</button></a> 
        </div>
        </div>

        <div className="rounded-full bg-blue-500 w-full h-full mx-10 flex items-center">
          {/* You can replace the image with your actual profile image */}
          <img
            src={contact_img}
            alt="Contact"
            className="rounded-full w-full h-full object-cover"
          />
        </div>
      </div>
      {/* Add other header content or actions on the right side */}
    </div>

        {/* Here is the contact us section with the form and directly mail if need  */}
        <div className="flex items-center justify-between container my-3 mx-auto">
          <div id='ContactButton' className='container my-3 mx-auto'>
            <h1 className="text-3xl font-semibold mb-4">Contact With Us</h1>
            <p className='my-2'>If you have any query , please feel free to contact with us, we will help to mesaure your concern seriously</p>

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
                {loading ? <Loading />
                  :
                  <button
                    type="submit"
                    className="w-full btn-primary py-2 rounded-md focus:outline-none"
                  > Send Details </button>}
              </div>
            </form>
          </div>

          <div className='flex flex-col items-center p-2'>

            <div className='my-3'>
              <h1 className="text-xl text-highlight">Email US 👉 <span><img src={mail} alt="mail" style={{ width: "23px" }} className='mx-1 cursor-pointer inline' /></span></h1>
              <p className="text-sm">Easly send the mail, only click on the mail, we are waiting of your query to solve</p>
            </div>

            <div className='my-3'>
              <h1 className="text-xl text-highlight">Contact NOW 👉 <span><img src={phone} alt="Contact" style={{ width: "23px" }} className='mx-1 cursor-pointer inline' /></span></h1>
              <p className="text-sm">Everytime, we are avilable for your service can call to solve your query easily</p>
            </div>

          </div>
        </div>

      </section>
    </>
  );
};

export default ContactUs;
