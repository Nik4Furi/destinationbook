import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom'

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { readAll, removeNotification, setNotfications } from '../../Store/NotificationSlice';

import { toast } from 'react-toastify'

// Images 
import bell from '../../assets/bell-2.png'
import deleteImg from '../../assets/delete.png'

//Components
import Modal from '../Modal';

//Apis
import sendNotification, { DeleteNotifications } from '../../apis/NotificationsApi';

// Component
import Loading from '../Loading';


const NotificationIcon = () => {

  //--------------- Store Specific STuff -----------------X
  const dispatch = useDispatch();

  
  const users = useSelector(state => state.users.user);
  
  const token = localStorage.getItem('token'); //Authentication token
  
  //--------------- Find out the notifications count to show the notifications 
  const [notifications,setNotifications] = useState([]);

  const [count, setCount] = useState(0);

  //-------------------- Function to get all the notification of respective user
  const getAllNotifications = async () => {
    try {

        const res = await fetch(`${process.env.REACT_APP_API}notification/getAllNotifications`, {
            headers: {
                'Content-Type': 'application/json',
                'auth-token': token
            }
        });
        const data = await res.json();
        setNotifications(data.notification);

        setCount(data.notification.length)

        dispatch(setNotfications(data.notification));

    } catch (error) {
        console.log('error ', error);
    }
}

useEffect(()=>{
  getAllNotifications(); // fetching all the notifications
},[])



  // console.log('unread ', notifications);
  const [loading,setLoading] = useState(false);


  //--------------- Modal Specific Stuff, actions related to modal --------------X
  const [isModalOpen, setIsModalOpen] = useState(false);

  //------------ Function to open the notification model, and we call api to show all the notifications
  const openModal = async () => {
    //To open the model have minimum msg length is 1
    if(notifications.length === 0 || !notifications){
      toast.warn('You have no msg receive yet');
      return;
    }
    setIsModalOpen(true);

    //---------- Updating the count
    // setCount(0);

    // if (notifications?.length > 0) {
    //   //----------------- Updating the notifications read true
    //   dispatch(readAll());

    //----------- Now call the api to make read all notifications
    //   try {
    //     const res = await fetch(`${process.env.RAECT_APP_API}notification/read`, {
    //       method: 'PUT',
    //       headers: {
    //         'Content-Type': 'application/json',
    //         'auth-token': token
    //       }
    //     });
    //     const data = await res.json();
    //     console.log('check data is ', data);
    //   } catch (error) {
    //     console.log('error.message ', error.message);
    //   }
    // }
  };

  //---------- Function to call the model for close
  const closeModal = () => {
    setIsModalOpen(false);
  };

  //----------------- Function to handle the request of acceptence and rejectence ----------------X
  const handleAcceptRequest = async (id) => {
    console.log('accept ', id);

    const notify = notifications?.filter(item => item._id === id);
    console.log('check notify', notify);

    const msg = {
      title: `Your request of the booking is accepted`,
      message: `Your request of the booking is accepted `,
      sender: users._id,
      receiver: notify[0].sender
    };

    setLoading(true);

    // ------ Send the notification to client 
    await sendNotification(msg, notify[0].sender);

    //------- Call function to delete the msg
    await handleDeleteNotification(id);

    setLoading(false);

    toast.success('Sending the confirmation notification to client')
  }
  
  const handleRejectRequest = async (id) => {

    const notify = notifications.filter(item => item._id === id);
    console.log('check notify', notify);

    const msg = {
      title: `Your request of the booking is accepted`,
      message: `Your request of the booking is accepted `,
      sender: users._id,
      receiver: notify[0].sender
    };

    setLoading(true);

    // ------ Send the notification to client 
    await sendNotification(msg, notify[0].sender);

    //------- Call function to delete the msg
    await handleDeleteNotification(id);

    setLoading(false);

    toast.error('Reject the request of the client')
  }

  //------------------- Function to delete the notification, and who notification delete we are showing this booking place request  is pending--------------X
  const handleDeleteNotification = async (id) => {

    //-------- Delete the notifications from store
    dispatch(removeNotification(id));

    //---------- Now delete from the state
    const filteredNotifications = notifications?.filter(item => item._id !== id);
    setNotifications(filteredNotifications);
    
    setLoading(true);

    //----------- Call the api to delete the notification
    try {
      const data = await DeleteNotifications(id);

      if(data.success === true)
        toast.success(data.msg);
      else if(data.success === false)
        toast.error(data.msg);

    } catch (error) {
      console.log('error ', error.message);
      toast.error(error.message);
    }

    setLoading(false);
  }

  return (
    <>
      {/* Modal section to open the modal when click on notification icon  */}
      <Modal isOpen={isModalOpen} onClose={closeModal}  >
        {loading && <Loading />}
        {notifications &&
          notifications.map((item) => (
            <div key={item._id} className="bg-white rounded-lg overflow-hidden my-2" >

              <div className='absolute top-0 right-2 cursor-pointer my-2 mx-2' onClick={() => handleDeleteNotification(item._id)}><img src={deleteImg} alt="delete" style={{ width: "23px" }} /></div>

              <h2 className=" my-2 text-lg capitalize font-semibold">{item.title}</h2>
              <p className='text-sm'>{item.message}</p>


              {
                users?.role === 'user' &&
                <div className="flex items-center justify-between">
                  <Link to="/checkout"><button className='mx-2 my-1 px-2 bg-green-500 text-white py-1 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600'>Checkout</button></Link>
                </div>

              }{
                users?.role === 'sponser' &&
                <div className="flex items-center justify-between">
                  <button onClick={() => handleAcceptRequest(item._id)} className='mx-2  my-1 px-2 bg-green-500 text-white py-1 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600'>Accept</button>
                  <button onClick={() => handleRejectRequest(item._id)} className='mx-2 my-1  px-2 bg-red-500 text-white py-1 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600'>Reject</button>
                </div>
              }

            </div>
          ))
        }

      </Modal>

      <div onClick={() => openModal()} className="cursor-pointer" >
        {/* Notification Icon */}
        <img src={bell} alt="bell" style={{width:"40px"}}/>

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
