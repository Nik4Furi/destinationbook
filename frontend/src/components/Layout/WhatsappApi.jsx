import React from 'react';

import Whatsapp from '../../assets/Footer/whatsapp-1.png'

import TextHighlight from '../Layout/Form/TextHighlight'

const WhatsappApi = () => {

  const handleWhatsAppClick = () => {

    const phoneNumber = process.env.REACT_APP_ADMIN_PHONE || '0123456789'; // Replace with the desired phone number
    const message = 'Hello, I need your help to book a space 🚀'; // Replace with your desired message

    // Create the WhatsApp link
    const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

    // Open the WhatsApp link in a new tab or window
    window.open(whatsappLink, '_blank');
  };

  //Function to hidden the text 'chat with us'
  const handleHidden  = ()=>{
    document.getElementById('chatWithUs').style.display = 'none';
  }

  return (
    <div className='fixed bottom-0 right-3 ' >
      {/* <p id='chatWithUs' className='text-highlight text-sm font-bold'>Chat With US     <span className='text-lg cursor-pointer text-gray-500' onClick={() => handleHidden()}> X</span></p> */}
      <p id='chatWithUs'> <TextHighlight title={'Chat With US'} size='md' /> <span className='text-lg cursor-pointer text-gray-500 inline' onClick={() => handleHidden()}> X</span></p>
  
      <img className='animate-pulse'
        src={Whatsapp}// Replace with the actual image path
        alt="WhatsApp"
        style={{ cursor: 'pointer' ,width: "90px"
    }}
        onClick={handleWhatsAppClick}
      />
    </div>
  );
};

export default WhatsappApi;
