import React, { useState } from 'react';

import { useSelector } from 'react-redux'

import { toast } from 'react-toastify'

//Components
import Modal from '../Modal'
import DestinationCard from './DestinationCard';

import Loading from '../Loading';

function SelectionWork({ }) {
  // eslint-disable-next-line

  //------------- Store Specfic Stuff
  const places = useSelector(state => state.places.places);

  //---------------- Stuff filling the details to find the work spaces where and the city 
  const cities = ['New Delhi', 'Mumbai', 'Pune', 'Kolkata', 'Hydrabaad', 'Banguluru'];
  const purposes = ['Meeting Room', 'Virtual Office', 'Confressnce', 'Tour', 'Other'];


  const [selectedData, setSelectedData] = useState({ city: '', purpose: '' });
  const [data, setData] = useState([]); //used to show modal results
  const [loading, setLoading] = useState(false);

  //------- When click on the search now button fix to can't scroll
  // const [isScrollDisabled, setScrollDisabled] = useState(false);




  //------------ Logic to open the models open to helping to search now
  const [openModal, setOpenModal] = useState(false);

  //Help to edit the input fields
  const handleCityChange = (e) => setSelectedData({ ...selectedData, [e.target.name]: e.target.value });

  //------------ Function to show the spaces to search now
  const handleSearchNow = () => {
    // setScrollDisabled(!isScrollDisabled);

    //1. Filtering the result by the purpose and city name
    //a. convert botth of them in lowercase
    let city = selectedData.city.toLowerCase();
    let purpose = selectedData.purpose.toLowerCase();

    let newFilterPlaces = places.filter(item => (item.location === city));
    // console.log('filter places ', newFilterPlaces);

    setLoading(true);

    //2. Check is length is > 0 then open the modal o/w tell them to no result found
    if (newFilterPlaces.length <= 0) {
      toast.warning('No result found to show')
      return;
    }
    // setData(newFilterPlaces);
    setData(places)
    setLoading(false);
    setOpenModal(true);

  }
  //-------- Function to close the modal
  const handleCloseModal = () => {
    setOpenModal(false)
    // setScrollDisabled(!isScrollDisabled)
    // document.body.classList.remove('no-scroll');
  };

  // Add the 'no-scroll' class to the body when scrolling is disabled
  //  if (isScrollDisabled) {
  //   document.body.classList.add('no-scroll');
  // } 

  return (
    <>
      <Modal isOpen={openModal} onClose={handleCloseModal} >
        {loading && <Loading />}
        <div className={`container my-2 mx-auto z-[100] `}>
          <h2 className="text-2xl font-bold text-white">Results of your chosen city {selectedData.city}</h2>

          <div className="grid md:grid-cols-3 gap-3 grid-cols-2">
            {data.map((item) => (
              <DestinationCard key={item._id} img={item.picture.url} heading={item.name} descripiton={(item.description).substr(0, 90)} id={item._id} />
            ))}
            {/* </div> */}
          </div>
        </div>

      </Modal>
      <div className="flex items-center justify-center flex-col">
        <div className="flex items-center justify-evenly w-full">
          <div className='w-[40%] ms-1'>
            <select
              id="city"
              name='city'
              className="w-full rounded-lg p-3 border border-black focus:outline-none cursor-pointer focus:border-red-500"
              value={selectedData.city}
              onChange={handleCityChange}
            >
              <option className='cursor-pointer' value="">Choose Your Interested City</option>
              {cities.map((data, index) => (
                <option className='cursor-pointer' key={index} value={data}>
                  {data}
                </option>
              ))}
            </select>


            {/* {selectedCity && (
        <p className="mt-2 text-green-600">
          You selected: {selectedCity}
        </p>
      )} */}
          </div>
          <div className='w-[40%] ms-1'>
            <select
              id="purpose"
              name='purpose'
              className="w-full rounded-lg p-3 border border-black focus:outline-none cursor-pointer focus:border-red-500"
              value={selectedData.purpose}
              onChange={handleCityChange}
            >
              <option className='cursor-pointer' value="">Choose Your Purpose</option>
              {purposes.map((purpose, index) => (
                <option className='cursor-pointer' key={index} value={purpose}>
                  {purpose}
                </option>
              ))}
            </select>


            {/* {selectedCity && (
        <p className="mt-2 text-green-600">
          You selected: {selectedCity}
        </p>
      )} */}
          </div>
        </div>

        <div className="text-center block mx-auto ">
          <button onClick={() => handleSearchNow()} className='btn-primary my-2 mx-auto'> Search Now</button>
        </div>
      </div>
    </>
  );
}

export default SelectionWork;
