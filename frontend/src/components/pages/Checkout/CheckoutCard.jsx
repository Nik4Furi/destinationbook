import React from 'react';

const CheckoutCard = ({ name, address, handleCheckout, totalPrice, status }) => {

  // console.log(status);

  return (

    <div className="bg-slate-100 rounded-lg overflow-hidden shadow-md shadow-black p-2 relative" style={{ height: "254px" }}>
      <h2 className="text-xl font-semibold mb-3 text-center ">Checkout Summary</h2>
      <div className="text-gray-700 text-sm mb-3">
        <p className='capitalize'>Name: <strong>{name}</strong></p>
        <p>Address: <strong>{address.length === 0 ? "no available address" : address}</strong></p>

        <p className="text-sm font-medium text-red-400">If any book request is old from 30 days, so please delete that request</p>
      </div>
      <div className="text-green-500 font-semibold text-lg ">
        {/* Total Price: <strong>&#x20B9;{totalPrice?.toFixed(2)}</strong> */}
      </div>
      <div className="px-5 py-2">
        {
          status === 'pending' ?

            <button disabled className='px-4 py-2 rounded-md focus:outline-none btn-secondary' title="Your booking request is now pending, can't pay">Checkout</button>

            :
            <button onClick={() => handleCheckout()} className='mx-auto block w-[100%] my-5 px-4 py-2 rounded-md focus:outline-none btn-primary '>Checkout</button>
        }
      </div>

    </div>
  );
};

export default CheckoutCard;
