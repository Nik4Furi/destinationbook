import React from 'react';
import { Link } from 'react-router-dom';

const CheckoutCard = ({ name, address, handleCheckout,totalPrice,status }) => {
  console.log(status);
  return (
    <div className="bg-slate-100 rounded-lg overflow-hidden shadow-md shadow-black p-4" style={{height:"254px"}}>
      <h2 className="text-xl font-semibold mb-3 text-center ">Checkout Summary</h2>
      <div className="text-gray-700 text-sm mb-3">
        <p className='capitalize'>Name: <strong>{name}</strong></p>
        <p>Address: <strong>{address.length === 0 ? "no available address" : address}</strong></p>

        <p className="text-sm font-medium text-red-400">If any book request is old from 30 days, so please delete that request</p>
      </div>
      <div className="text-green-500 font-semibold text-lg mb-3">
        {/* Total Price: <strong>&#x20B9;{totalPrice.toFixed(2)}</strong> */}
      </div>
{
  // status === 'pending' ?
  <button onClick={() => handleCheckout()} className='mx-14  w-1/2 my-5 px-4 py-2 rounded-md focus:outline-none btn-primary'>Checkout</button>
  // :
  //   <Link to={'/paymentSuccess'}>  <button onClick={() => handleCheckout()} className='mx-14  w-1/2 my-5 px-4 py-2 rounded-md focus:outline-none btn-primary '>Checkout</button></Link>
}
      
    </div>
  );
};

export default CheckoutCard;
