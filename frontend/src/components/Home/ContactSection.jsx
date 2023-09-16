import React from 'react';

function ContactSection() {
  return (
    <div className="container block mx-auto my-2 overflow-scroll">
      <div className="flex w-[80%] items-center justify-between mx-auto -z-20">
        {/* Left Column */}
        <div className="w-[80%] mx-auto block px-4 mb-4">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <form className=" ">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-600">Name</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-blue-500"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-gray-600">Email</label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-blue-500"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label className="block text-gray-600">Phone</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-blue-500"
                  placeholder="Your Phone"
                />
              </div>
              <div>
                <label className="block text-gray-600">City</label>
                <select
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-blue-500"
                  defaultValue=""
                >
                  <option value="" disabled>Select City</option>
                  <option value="city1">City 1</option>
                  <option value="city2">City 2</option>
                  <option value="city3">City 3</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-600">Date</label>
                <input
                  type="date"
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-600">Time</label>
                <input
                  type="time"
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white rounded-lg p-3 hover:bg-blue-600 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Right Column (You can add additional content here) */}
        <div className="w-full md:w-1/2 px-4">
          {/* Add any additional content or information here */}
        </div>
      </div>

      </div>
  );
}

export default ContactSection;
