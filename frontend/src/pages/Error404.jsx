import React from 'react';

const Error404 = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold text-gray-800 mb-4">404</h1>
        <p className="text-2xl font-semibold text-gray-600 mb-4">Page Not Found</p>
        <p className="text-gray-700 text-lg">
          The page you are looking for might have been removed, had its name changed,
          or is temporarily unavailable.
        </p>
        <div className="mt-6">
          <a href="/" className="text-blue-600 hover:underline">
            Go back to home
          </a>
        </div>
      </div>
    </div>
  );
};

export default Error404;
