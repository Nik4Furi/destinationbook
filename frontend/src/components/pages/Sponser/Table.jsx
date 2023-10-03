import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom'

import { toast } from 'react-toastify';

//Global Functions
import {Token} from '../../../GloballyFunctions'

//Components
import SponserModal from './SponserModal';
import Loading from '../../Layout/Loaders/Loading'

const Table = ({ heading, para, col1, col2, col3 }) => {

  const token = localStorage.getItem('token');

  const [places, setPlaces] = useState([]);

  //Call the api to fetch places related to the sponser
  const fetchPlaces = async () => {
    try {
      const res = await fetch(`${process.env.REACT_APP_API}sponser/fetch`, {
        headers: {
          'auth-token': Token
        }
      })
      const data = await res.json();
      // console.log('data ', data);

      setPlaces(data.places);

    } catch (error) {
      // console.log(error.message);
      toast.error(error);
    }
  }

  useEffect(() => {
    fetchPlaces(); //Fetch all the places according sponser
  }, []);

  const [loading, setLoading] = useState(false);

  //-------------- Modal Specific Stuff to handle the logic
  const [isOpen, setIsOpen] = useState(false);
  const [closeModal, setCloseModal] = useState(true);
  const [id, setId] = useState(null);

  //Function to edit the data help of the model 
  const handleEditPlace = (id) => {
    // console.log('edit ')

    setIsOpen(true);

    setId(id)


  }
  //----------------- Function to delete all details of the place 
  const handleDeletePlace = async (id) => {
    //-------- Delete from the state
    const data = places.filter((item) => item._id !== id);
    setPlaces(data);

    //------- Call the api to delete the places
    setLoading(true);
    try {
      const res = await fetch(`${process.env.REACT_APP_API}sponser/delete/${id}`, {
        method: 'DELETE',
        headers: {
          'auth-token': token
        }
      });
      const data = await res.json();
      // console.log(data);

      if (data.success === true)
        toast.success(data.msg);
      else if (data.success === false)
        toast.error(data.msg);

    } catch (error) {
      // console.log(error.message);
      toast.error(error);
    }
    setLoading(false);
  }
  return (
    <>
      {/* section of model when user click on the edit button  */}
      <SponserModal isOpen={isOpen} closeModal={closeModal} id={id} />

      <div className="container mx-auto p-4">
        <h1 className="text-3xl capitalize font-semibold mb-4">{heading}</h1>
        <p className="text-md font-bold mb-2">{para} </p>
        <div className="bg-white shadow-md rounded-md overflow-x-auto">
          <table className="min-w-full">
            {loading && <Loading />}
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
            <tbody>
              {
                !places?
                  <tr>
                    <td>
                      <h3 className="text-semibold">No items is here, please add new</h3>
                    </td>
                  </tr>
                  : ''
              }
              {
                places && places.map((item, index) => (
                  <tr data-aos="zoom-in" key={index}>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                      {item.name}
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                      {item.description}
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">

                      <img src={item.picture.url} alt="Palace on wheels" style={{ maxWidth: "203px" }} />
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 border-b border-gray-300">
                      <Link to={`/sponser/editDetails/${item._id}`}> <button className="my-2 px-2 ml-2 w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">Show More...</button></Link>
                      <button onClick={() => handleDeletePlace(item._id)} className="my-2 px-2 ml-2 w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600">Delete</button>
                    </td>
                  </tr>
                ))
              }
            </tbody>

            <tbody>
              {/* <tr >
                <td className=" px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                  <span className='text-bold'>Palace on wheels</span>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                  We can add new palaces during the setup of the user booking, also providing the mile stons to pick the places
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                  <img src={dest} alt="Palace on wheels" style={{ maxWidth: "203px" }} />
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 border-b border-gray-300">
                  <div className="flex flex-col">


                    {/* <button onClick={() => handleEditPlace(item._id)} className="my-2 px-2 ml-2 w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">Edit</button>
                    <button onClick={() => handleDeletePlace(item._id)} className="my-2 px-2 ml-2 w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600">Delete</button> */}
              {/* </div>
                </td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </div>

    </>
  );
};

export default Table;
