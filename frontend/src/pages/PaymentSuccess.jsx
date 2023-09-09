import React from 'react';

import confeti from '../assets/confeti.avif'
import { Link } from 'react-router-dom';

const PaymentSuccess = () => {
  return (
    <div className="container mx-auto p-4 text-center" style={{minHeight:"80vh"}}>
      <div className="py-8">
        <img
          src={confeti}
          alt="Success"
          className="mx-auto h-32 w-32 rounded-full border-green-500 border-4 mb-4"
        />
        <h1 className="text-3xl font-semibold text-green-600 mb-4">Payment Successful!</h1>
        <p className="text-gray-700 text-lg">
          Thank you for your payment. Your transaction was successful.
        </p>
        <div className="mt-8">
       <Link  to={'/'}> <button className="btn-primary py-2 px-4 rounded-md ">
            Back To Home
          </button></Link>  
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
