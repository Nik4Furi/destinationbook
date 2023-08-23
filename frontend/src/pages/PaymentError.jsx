import React from 'react';
import {Link} from 'react-router-dom'
import error from '../assets/paymenterror.jpg'

const PaymentError = () => {
  return (
    <div className="container mx-auto p-4 text-center" style={{minHeight:"80vh"}}>
      <div className="py-8">
        <img
          src={error}
          alt="Success"
          className="mx-auto h-32 w-32 rounded-full border-red-500 border-4 mb-4"
        />
        <h1 className="text-3xl font-semibold text-red-600 mb-4">Payment UnSuccessful!</h1>
        <p className="text-gray-700 text-lg">
          Your payment is not done succesfully, please try again
        </p>
        <div className="mt-8 flex items-center justify-center">
            <Link to="/">
          <button className="bg-blue-500 text-white py-2 px-4 mx-2 my-2 rounded-md hover:bg-blue-600">
            Back To Home
          </button></Link>
          <Link to="/checkout"><button className="bg-blue-500 text-white py-2 px-4 mx-2 my-2 rounded-md hover:bg-blue-600">
           Back To Checkout
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentError;
