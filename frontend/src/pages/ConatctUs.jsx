import React, { useState } from 'react';

//StyleSheet
import '../styles/ContactUs.module.css'

import { useSelector } from 'react-redux';

import { toast } from 'react-toastify'


//APIs Stuff
import sendNotification from '../apis/NotificationsApi'

//Components Stuff
import Loading from '../components/Layout/Loaders/Loading'
import WhatsappApi from '../components/Layout/WhatsappApi';

// Assets Images Stuff
import mail from '../assets/Footer/mail.png'
import phone from '../assets/Footer/call.png'
import contact_img from '../assets/contact.jpg'
import Button from '../components/Layout/Form/Button';


const ContactUs = () => {

  //----------- Admin details where we send the notification for conatct us
  const AdminID = process.env.REACT_APP_ADMIN_ID;

  const user = useSelector(state => state.users.user);

  const [formData, setFormData] = useState({
    name: user?.name || '',
    contact: user?.email || '', // email or phone
    concern: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault();

    // console.log(formData);
    setLoading(true);

    //--------- Now send the msg to admin for contact
    const msg = {
      title: `'${formData.name}' Is Want To Contact With US`,
      message: `'${formData.contact}' is write the concern, please read out from here 👉 "${formData.concern}"`,
      sender: user?._id || null,
      receiver: AdminID
    };

    try {
      await sendNotification(msg, AdminID);

    } catch (error) {
      // console.log(error);
      toast.error(error);
    }

    setLoading(false);
    setFormData({ name: '', concern: '', contact: '' });

  };

  return (
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
              <div className="flex flex-col items-center ">
                <h1 className=" font-bold text-4xl text-highlight my-2">Get In Touch</h1>
                <p className="text-lg my-1">Want to get in touch ? We'd love to hear from you. Here how you can react us...</p>
                <a href="#ContactButton"> <Button title={'Contact US'} btntype='secondary' /> </a>
              </div>
            </div>

            <div className="hidden md:block rounded-full bg-blue-500 w-full h-full mx-10">
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
        <div className="flex flex-col-reverse md:flex-row items-center justify-between container my-3 mx-auto">

          <div id='ContactButton' className='container my-3 mx-auto'>
            <h1 className="text-3xl font-semibold mb-4">Contact With Us</h1>
            <p className='my-2'>If you have any query , please feel free to contact with us, we will help to mesaure your concern seriously</p>

            <form onSubmit={handleSubmit} className="max-w-md mx-auto">

              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700">Name <span className="text-highlight">*</span></label>
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
                <label htmlFor="contact" className="block text-gray-700">Email <span className="text-highlight">*</span></label>
                <input
                  type="email"
                  id="contact"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="concern" className="block text-gray-700">Concern <span className="text-highlight">*</span></label>
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
                {
                  loading ? <Loading /> : <button
                    type="submit"
                    className="w-full btn-secondary px-4 py-2 rounded-md focus:outline-none"
                  >
                    Send Now
                  </button>

                }


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

      {/* Whatsapp api to add here to quick connect  */}
      <WhatsappApi />
    </>
  );
};

export default ContactUs;
