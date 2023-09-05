import React from 'react';

const DestinationCard = ({ imageSrc, title, capacity, price, location,start_date,end_date,start_time,end_time,id,handleRemoveBooking }) => {

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg my-6 relative" style={{width:"60%"}}>
    <div className='absolute top-2 right-2'>
      <h1 onClick={() => handleRemoveBooking(id)} className="text-3xl text-center cursor-pointer font-extrabold ">X</h1>
    </div>
      <div className="flex">
        {/* Image */}
        {/* <div className="w-1/2"> */}
          <img src={imageSrc} alt={title} className="my-2 mx-2 rounded-md"  style={{maxWidth : "180px",maxHeight:"90px"}}/>
        {/* </div> */}

        {/* Text Content */}
        <div className="w-1/2 p-4">
          <h2 className="text-xl capitalize font-semibold mb-2"><strong>{title}</strong></h2>
          <p className="text-gray-500 text-sm mb-2">Capacity: <strong>{capacity}</strong></p>
          <p className="font-semibold text-lg mb-2"><strong className='text-green-500 '>&#x20B9; {price} </strong> (For one seat/room)</p>
          <p className="text-gray-500 text-sm my-2 mx-2">Location: <strong>{location}</strong></p>
          <p className="text-gray-500 text-sm my-2 mx-2">From: <strong>{start_date}</strong> </p>
          <p className="text-gray-500 text-sm my-2 mx-2">To: <strong>{end_date}</strong></p>
       
        </div>
      </div>
      <p className="text-gray-500 text-sm my-2 mx-2">Start Time: <strong>{start_time}</strong> </p>
          <p className="text-gray-500 text-sm my-2 mx-2">End Time: <strong>{end_time}</strong></p>
    </div>
  );
};

export default DestinationCard;
