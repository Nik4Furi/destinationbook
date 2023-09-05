import React, { useEffect, useState } from 'react';
import {useDispatch} from 'react-redux'
import { setNotfications } from '../Store/NotificationSlice';

const Modal = ({ isOpen, onClose, children }) => {
    const dispatch = useDispatch();
    const [notification,setNotification] = useState();

 

  //----------- When click on the model show all the un read notifications
  const unReadNotifications = async()=>{
    try {
        const token = localStorage.getItem('token')
        const res = await fetch(`${process.env.REACT_APP_API}notification/getAllNotifications`,{
            headers: {
                'Content-Type':'application/json',
                'auth-token' : token
            }
        });
        const data = await res.json();
        // console.log('notifications ',data);

        // dispatch(setNotfications(data));

        setNotfications(data.notification);

    } catch (error) {
        console.log(error);
    }
  }

  useEffect(()=>{
    // unReadNotifications();
    console.log('notif ',notification);
  },[]);

  if (!isOpen) {return null};

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50" >
      <div className="fixed inset-0 bg-black opacity-50" ></div>
      <div className="bg-white p-4 rounded-lg z-50 overflow-scroll relative" style={{maxHeight : "569px"}}>
        {children}
        <button onClick={onClose} className="fixed top-0 mt-4 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
