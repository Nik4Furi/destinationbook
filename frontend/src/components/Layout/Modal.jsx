import React from 'react';
// import React, { useEffect, useState } from 'react';

// import { useDispatch } from 'react-redux'
// import { Token } from '../../GloballyFunctions';

const Modal = ({ isOpen, onClose, children }) => {

  // const [notification, setNotification] = useState();



  //----------- When click on the model show all the un read notifications
  // const unReadNotifications = async () => {
  //   try {
  //     const res = await fetch(`${process.env.REACT_APP_API}notification/getAllNotifications`, {
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'auth-token': Token
  //       }
  //     });
  //     const data = await res.json();
  //     // console.log('notifications ',data);

  //     setNotification(data.notification);

  //   } catch (error) {
  //     console.log(error);
  //   }
  // }


  if (!isOpen) { return null };

  return (
    <>
      <div data-aos="zoom-in" className="fixed inset-0 flex items-center justify-center z-50" >
        <div className="fixed inset-0 bg-black opacity-50" ></div>
        <div className="w-2/3 p-4 rounded-lg z-50 overflow-scroll relative" style={{ maxHeight: "500px" }}>
          {children}
          <button onClick={() => onClose()} className="absolute top-0 mt-4 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600" style={{ top: '-6%' }}>
            Close
          </button>
        </div>
      </div>
    </>
    );
};

export default Modal;
