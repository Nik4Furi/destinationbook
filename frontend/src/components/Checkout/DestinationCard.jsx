import React from 'react';

const DestinationCard = ({ imageSrc, title, capacity, price, location,start_date,end_date }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg ">
      <div className="flex">
        {/* Image */}
        <div className="w-1/2">
          <img src={imageSrc} alt={title} className="w-full min-h-fit" />
        </div>

        {/* Text Content */}
        <div className="w-1/2 p-4">
          <h2 className="text-xl capitalize font-semibold mb-2"><strong>{title}</strong></h2>
          <p className="text-gray-500 text-sm mb-2">Capacity: <strong>{capacity}</strong></p>
          <p className="font-semibold text-lg mb-2"><strong className='text-green-500 '>&#x20B9;{price} </strong> (For one seat/room)</p>
          <p className="text-gray-500 text-sm">Location: <strong>{location}</strong></p>
          <p className="text-gray-500 text-sm">From: <strong>{start_date}</strong> </p>
          <p className="text-gray-500 text-sm">To: <strong>{end_date}</strong></p>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
