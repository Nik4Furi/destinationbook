import React from 'react';

const DestinationCard = ({ imageSrc, title, capacity, price, city, start_date, end_date, start_time, end_time, id, handleRemoveBooking, status }) => {

  return (
    
    <div data-aos="zoom-in" className=" bg-gray-50 rounded-lg p-0 overflow-hidden shadow-xl my-6 relative" >
    {/* <div data-aos="zoom-in" className="bg-white rounded-lg overflow-hidden shadow-lg my-6 relative" style={{ width: "60%" }}> */}
      <div className='absolute md:top-2 md:right-2 top-[60%] right-10'>
        <h1 onClick={() => handleRemoveBooking(id)} className="text-3xl text-center cursor-pointer font-extrabold text-highlight">X</h1>
      </div>

      <div className="flex flex-col md:flex-row">
        {/* Image */}
        {/* <div className="w-1/2"> */}
        <img src={imageSrc} alt={title} className="my-2 mx-2 h-1/2 rounded-md max-w-[100%] md:max-w-[50%]"  />
        {/* <img src={imageSrc} alt={title} className="my-2 mx-2 rounded-md" style={{ maxWidth: "180px", maxHeight: "90px" }} /> */}
        {/* </div> */}

        {/* Text Content */}
        <div className="p-2">
          <h2 className="text-xl capitalize font-semibold mb-2"><strong>{title}</strong></h2>
          <p className="text-gray-500 text-sm mb-2">Capacity: <strong>{capacity}</strong></p>
          <p className="font-semibold text-lg mb-2"><strong className='text-green-500 '>&#x20B9; {price} </strong> (For one seat/room)</p>
          <p className="text-black text-sm my-2 mx-2">City: <strong>{city}</strong></p>
          <p className="text-gray-500 text-sm my-2 mx-2">From: <strong>{start_date}</strong> </p>
          <p className="text-gray-500 text-sm my-2 mx-2">To: <strong>{end_date}</strong></p>

        </div>

      </div>

      <div className="flex items-center justify-between">
      <div>
        <p className="text-gray-500 text-sm my-2 mx-2">Start Time: <strong>{start_time}</strong> </p>
        <p className="text-gray-500 text-sm my-2 mx-2">End Time: <strong>{end_time}</strong></p>
      </div>
      <div>
        <p className={`  text-sm my-2 mx-2 `}>Status: <strong className={`${status === 'pending' ? 'text-red-500' : 'text-green-400'} capitalize`}>{status}</strong></p>

      </div>
      </div>
    </div>
  );
};

export default DestinationCard;
