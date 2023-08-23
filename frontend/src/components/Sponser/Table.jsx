import React, { useState } from 'react';

import dest from '../../assets/dest-1.jpg'
import Modal from './Modal';

const Table = ({ heading,para,col1,col2,col3 }) => {
    const [isOpen,setIsOpen] = useState(false);
    const [closeModal,setCloseModal] = useState(true);

    //Function to edit the data help of the model 
    const handleEdit = ()=>{
        console.log('edit ')

        setIsOpen(true);
    }
  return (
      <>
      {/* section of model when user click on the edit button  */}
        <Modal isOpen={isOpen} closeModal={closeModal} />

    <div className="container mx-auto p-4">
      <h1 className="text-3xl capitalize font-semibold mb-4">{heading}</h1>
      <p className="text-md font-bold mb-2">{para} </p>
      <div className="bg-white shadow-md rounded-md overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 tracking-wider">
                {col1}
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 tracking-wider">
                {col2}
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 tracking-wider">
                {col3}
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          {/* <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                  {item.name}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                  {item.description}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                  {item.places}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 border-b border-gray-300">
                  <button className="text-indigo-600 hover:text-indigo-900">Edit</button>
                  <button className="text-red-600 hover:text-red-900 ml-2">Delete</button>
                </td>
              </tr>
            ))}
          </tbody> */}

<tbody>
              <tr >
                <td className=" px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                 <span className='text-bold'>Palace on wheels</span>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                  We can add new palaces during the setup of the user booking, also providing the mile stons to pick the places
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                 <img src={dest} alt="Palace on wheels" style={{maxWidth:"203px"}} />
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 border-b border-gray-300">
                    <div className="flex flex-col">

                  <button onClick={()=> handleEdit()} className="text-indigo-600 py-2 rounded-md hover:text-indigo-900">Edit</button>
                  <button className="text-red-600 hover:text-red-900 ml-2">Delete</button>
                  </div>
                </td>
              </tr>
          </tbody>
        </table>
      </div>
    </div>

    </>
  );
};

export default Table;
