import React, { useState } from 'react';

import { Link } from 'react-router-dom'

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { readAll, removeNotification, setNotfications } from '../../Store/NotificationSlice';

import { toast } from 'react-toastify'

// Images 
import bell from '../../assets/bell-2.png'

//Components
import Modal from '../Modal';

//Apis
import sendNotification from '../../apis/NotificationsApi';


const NotificationIcon = () => {

  const dispatch = useDispatch();
  const notifications = useSelector(state => state.notification.notifications);
  console.log('notifications ', notifications);

  const users = useSelector(state => state.users.user);

  // console.log('check notific ', notifications);
  const token = localStorage.getItem('token'); //Authentication token

  const unReadNotifications = notifications?.filter(item => item.read === false);
  console.log('unread ', unReadNotifications?.length);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [count, setCount] = useState(unReadNotifications?.length);


  //--------- Function to call when open the model
  const openModal = async () => {
    setIsModalOpen(true);

    //---------- Updating the count
    setCount(0);

    if (unReadNotifications?.length > 0) {
      //----------------- Updating the notifications read true
      dispatch(readAll());

      //----------- Now call the api to make read all notifications
      try {
        const res = await fetch(`${process.env.RAECT_APP_API}notification/read`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'auth-token': token
          }
        });
        const data = await res.json();
        console.log('check data is ', data);
      } catch (error) {
        console.log('error.message ', error.message);
      }
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  //----------------- Function to handle the request of acceptence and rejectence
  const handleAcceptRequest = async (id) => {
    console.log('accept ', id);

    const notify = unReadNotifications?.filter(item => item._id === id);
    console.log('check notify', notify);

    const msg = {
      title: `Your request of the booking is accepted`,
      message: `Your request of the booking is accepted `,
      sender: users._id,
      receiver: notify[0].sender
    };

    // ------ Send the notification to client 
    await sendNotification(msg, notify[0].sender);

    toast.success('Sending the confirmation notification to client')
  }
  const handleRejectRequest = async (id) => {
    console.log('reject ', id)

    const notify = unReadNotifications.filter(item => item._id === id);
    console.log('check notify', notify);

    const msg = {
      title: `Your request of the booking is accepted`,
      message: `Your request of the booking is accepted `,
      sender: users._id,
      receiver: notify[0].sender
    };

    // ------ Send the notification to client 
    await sendNotification(msg, notify[0].sender);

    toast.error('Reject the request of the client')
  }

  //------------------- Function to delete the notification
  const handleDeleteNotification = async (id) => {
    //------------ Find and delete the notification
    console.log('before delete notification ', notifications.length);

    dispatch(removeNotification(id));

    console.log('before delete notification ', notifications.length);
    // const newNotifications = notifications.filter((item) => item._id !== id);
    // console.log('after delete notification ',newNotifications.length);

    //----------- Call the api to delete the notification
    try {
      const token = localStorage.getItem('token');

      const res = await fetch(`${process.env.RAECT_APP_API}notification/delete/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': token
        }
      })
      const data = await res.json();
      console.log('check delete ', data);

    } catch (error) {
      console.log('error ', error.message);
    }
  }


  return (
    <>
      {/* Modal section to open the modal when click on notification icon  */}
      <Modal isOpen={isModalOpen} onClose={closeModal}  >
        {unReadNotifications &&
          unReadNotifications.map((item) => (
            <div key={item._id} className="bg-white rounded-lg overflow-hidden shadow-md p-4 my-2" >

              <h2 className="text-xl capitalize font-semibold">{item.title}</h2>
              <p>{item.message}</p>


              {
                users?.role === 'user' &&
                <div className="flex items-center justify-between">
                  <Link to="/checkout"><button className='mx-2 w-full my-1px-4 bg-green-500 text-white py-2 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600'>Checkout</button></Link>
                </div>

              }{
                users?.role === 'sponser' &&
                <div className="flex items-center justify-between">
                  <button onClick={() => handleAcceptRequest(item._id)} className='mx-2 w-1/2 my-1px-4 bg-green-500 text-white py-2 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600'>Accept</button>
                  <button onClick={() => handleRejectRequest(item._id)} className='mx-2 w-1/2 my-1  px-4 bg-red-500 text-white py-2 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600'>Reject</button>
                </div>
              }
              <div onClick={() => handleDeleteNotification(item._id)}><img src="../../assests/delete.png" alt="delete" /></div>
            </div>
          ))
        }

      </Modal>

      <div onClick={() => openModal()} className="relative inline-block cursor-pointer" style={{ right: "-59%" }}>
        {/* Notification Icon */}
        <img src={bell} alt="bell" style={{ width: "15%", padding: '0', margin: '0' }} />

        {/* Notification Badge */}
        {/* {count > 0 && ( */}
        <span className="absolute bg-red-500  text-white text-lg rounded-full" style={{ top: "-27%" }}>
          {count}
        </span>
        {/* )} */}
      </div>
    </>

  );
};

export default NotificationIcon;
