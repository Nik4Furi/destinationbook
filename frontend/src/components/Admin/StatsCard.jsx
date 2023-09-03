import React from 'react';

const StatsCard = ({color,Stats, userCount, isProfitable,types }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex items-center">
        {/* User Icon */}
        <div className={`w-12 h-12 rounded-full bg-${color}-500 text-white flex items-center justify-center mr-4`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4a4 4 0 110 8 4 4 0 010-8z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14.243 12.243a4 4 0 10-4.486 6.314 4 4 0 004.486-6.314z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14.243 12.243l5.657-5.657M5.657 12.243l5.657 5.657"
            />
          </svg>
        </div>

        {/* User Stats */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">{Stats} Statistics</h2>
          <p className="text-gray-600 text-sm">
            Total {types}: {userCount}{' '}
            {isProfitable ? (
              <span className="text-green-500 ml-2">Profitable</span>
            ) : (
              <span className="text-red-500 ml-2">Not Profitable</span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
