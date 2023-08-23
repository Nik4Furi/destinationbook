import React, { useState } from 'react';

const Modal = ({ isOpen, closeModal }) => {
  const [data, setData] = useState({
    name: '',
    description: '',
    image: '',
  });

  const generateRandomData = () => {
    // Replace this with your logic to generate random data
    setData({
      name: 'John Doe',
      description: 'Lorem ipsum dolor sit amet.',
      image: 'https://via.placeholder.com/150',
    });
  };

  const handleSave = () => {
    // You can add your logic here to save the data
    closeModal();
  };

  return (
    <div className={`fixed inset-0 ${isOpen ? 'block' : 'hidden'} z-10 bg-gray-500 bg-opacity-50`}>
      <div className="modal-container">
        <div className="modal-content bg-white rounded-lg p-4">
          <h2 className="text-2xl font-semibold mb-4">Modal Title</h2>
          <p>Name: {data.name}</p>
          <p>Description: {data.description}</p>
          <img src={data.image} alt="Random" className="w-32 h-32 my-4" />
          <div className="flex justify-end">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mr-2" onClick={handleSave}>
              Save
            </button>
            <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400" onClick={closeModal}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
