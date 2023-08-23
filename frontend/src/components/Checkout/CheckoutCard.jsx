import React from 'react';

const CheckoutCard = ({ name, address, totalPrice }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md p-4" style={{height:"334px"}}>
      <h2 className="text-xl font-semibold mb-3 text-center ">Checkout Summary</h2>
      <div className="text-gray-700 text-sm mb-3">
        <p className='capitalize'>Name: <strong>{name}</strong></p>
        <p>Address: <strong>{address}</strong></p>
      </div>
      <div className="text-green-500 font-semibold text-lg mb-3">
        Total Price: <strong>&#x20B9;{totalPrice.toFixed(2)}</strong>
      </div>

      <button className='mx-14  w-1/2 my-5 px-4 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600'>Checkout</button>
    </div>
  );
};

export default CheckoutCard;
