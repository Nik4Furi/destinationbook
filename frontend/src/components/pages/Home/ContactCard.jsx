import React, { useState } from 'react';

import { useSelector } from 'react-redux';

import { toast } from 'react-toastify';

//APIs
import sendNotification from '../../../apis/NotificationsApi';

//Components
import Loading from '../../Layout/Loaders/Loading';
import { Cities, Purposes } from '../../../GloballyFunctions';

const ContactCard = () => {
  const AdminID = process.env.REACT_APP_ADMIN_ID;

  const user = useSelector(state => state.users.user);


  const [formData, setFormData] = useState({ name: '', email: '', contact: '', city: '', purpose: '' });
  const [loading, setLoading] = useState(false);


  //Onchange event to handle input of the form
  const handleOnChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  //---------- Sending the notification to the admin for user directly connection
  const handleSubmit = async (e) => {
    e.preventDefault();

    // console.log(formData);

    setLoading(true);

    //---------- Msg to send the admin for connecting this user with their prefered details
    const msg = {
      title: `${user.name} Is Want To Contact With US`,
      message: `'${formData.name}' is filling the form for saying the ${formData.city} is prefered city for ${formData.purpose} purpose, please connect with this user with details 👉 email: ${formData.email} and phone: ${formData.contact}`,
      sender: user._id,
      receiver: AdminID
    }

    try {
      await sendNotification(msg, AdminID);

    } catch (error) {
      // console.log(error.message);
      toast.error(error);
    }
    setLoading(false);
    setFormData({ name: '', contact: '', email: '', purpose: '', city: '' });

  };

  return (
    <>
      <div className=" w-full p-2  rounded-lg shadow-lg" style={{ background: 'white', opacity: '0.89' }}>
        <h2 className="text-2xl text-red-500 text-center font-bold mb-2 capitalize">"Seamless solutions for your workspace evolution."</h2>
        {/* <h2 className="text-xl text-red-500 text-center font-bold mb-2 capitalize">Elevate your remote work experience with our seamless virtual office solutions.</h2> */}
        <form onSubmit={handleSubmit} className="space-y-1">
          <div className="grid gap-2 grid-cols-2">
            <div>
              <label htmlFor="name" className="block my-2 text-black">
                Name <span className='text-red-500'>*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={(e) => handleOnChange(e)}
                placeholder="John Doe"
                className="w-full p-2 border border-black rounded"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block  my-2 text-black">
                Phone <span className='text-red-500'>*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={(e) => handleOnChange(e)}
                placeholder="0123-498292"
                className="w-full p-2 border border-black  rounded"
              />
            </div>
          </div>
          <div className="grid gap-2 grid-cols-2">
            <div>
              <label htmlFor="email" className="block  my-2 text-black">
                Email <span className='text-red-500'>*</span>
              </label>
              <input
                type="email"
                id="phone"
                name="phone"
                value={formData.email}
                onChange={(e) => handleOnChange(e)}
                placeholder="johndoe@gmail.com"
                className="w-full p-2 border border-black  rounded"
              />
            </div>
            <div>
              <label htmlFor="city" className="block  my-2 text-black">
                Choose Prefered City <span className='text-red-500'>*</span>
              </label>
              <select
                id="city"
                name='city'
                className="w-full rounded-lg text-black p-3 border border-black focus:outline-none cursor-pointer focus:border-red-500"
                value={formData.city}
                onChange={(e) => handleOnChange(e)}
              >
                <option className='cursor-pointer' value="">Choose City</option>
                {Cities.map((data, index) => (
                  <option className='cursor-pointer' key={index} value={data}>
                    {data}
                  </option>
                ))}
              </select>
            </div>
          </div>


          <div>
            <label htmlFor="purpose" className="block my-2 text-black">
              Choose Type Of Space <span className='text-red-500'>*</span>
            </label>
            <select
              id="purpose"
              name='purpose'
              className="w-full text-black rounded-lg p-3 border border-black focus:outline-none cursor-pointer focus:border-red-500"
              value={formData.purpose}
              onChange={(e) => handleOnChange(e)}
            >
              <option className='cursor-pointer' value="">Choose Type Of Space:</option>
              {Purposes.map((purpose, index) => (
                <option className='cursor-pointer  text-black' key={index} value={purpose}>
                  {purpose}
                </option>
              ))}
            </select>
          </div>

          {
            user
              ? loading ? <Loading /> : <button
                type="submit"
                className="px-4 py-2 block cursor-pointer mx-auto my-7 text-white rounded btn-secondary"
              >
                Submit
              </button>
              : <button disabled title='Please login before filling form'
                className="px-4 py-2 block mx-auto my-7 text-white rounded cursor-none btn-secondary"
              >
                Submit
              </button>
          }


        </form>
      </div>
    </>
  );
};

export default ContactCard;
