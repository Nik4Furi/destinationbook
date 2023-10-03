import React, { useState } from 'react';

import { useSelector } from 'react-redux';

import Destinations from './Destinations'

const SearchingPlaces = () => {
    const places = useSelector(state => state.places.places);
    // console.log(places);

    const [query, setQuery] = useState('');
    const [results,setResults] = useState([]);

    const [categoriesBtn,setCategoriesBtn] = useState(['Recently','NearBy'])

    const cities = ['New Delhi', 'Mumbai', 'Pune', 'Kolkata', 'Hydrabaad', 'Banguluru'];

    const [city,setCity] = useState('');
    const handleInputChange = (e) => {
        const { value } = e.target;
        setCity(value);

        const filteredResults = places.filter((item) =>
            item.location.toLowerCase().includes(value.toLowerCase())
        );

        // console.log('filter result ',filteredResults);

        setResults(filteredResults);
    };

    //------------ Function to show the spaces to search now
//   const handleSearchNow = () => {

//     //1. Filtering the result by the purpose and city name
//     //a. convert botth of them in lowercase
//     let city = selectedData.city.toLowerCase();
//     let purpose = selectedData.purpose.toLowerCase();

//     let newFilterPlaces = places.filter(item => (item.location === city));
//     // console.log('filter places ', newFilterPlaces);

//     setLoading(true);

//     //2. Check is length is > 0 then open the modal o/w tell them to no result found
//     if (newFilterPlaces.length <= 0) {
//       toast.warning('No result found to show')
//       return;
//     }
//     // setData(newFilterPlaces);
//     setData(places)
//     setLoading(false);
//     setOpenModal(true);

//   }


    return (
        <>
            

            <div className="container mx-auto p-4 my-2">
                {/* Categories buttong to help for quick searching  */}
            {/* <CategoriesBtns category={categoriesBtn} /> */}

{/* Handling the searching when input or type something  */}
                {/* <input
                    type="text"
                    placeholder="🔍 nearby, recently, or use like this keywords to make your search fast ..."
                    className=" rounded-md bg-slate-100  p-2 w-full mb-4"
                    value={query}
                    onChange={handleInputChange}
                    style={{border:'1px solid black'}}
                /> */}

                {/* Implementing the searching when select a city  */}
                <div className='w-full ms-1'>
            <select
              id="city"
              name='city'
              className="w-full rounded-lg p-3 border border-black focus:outline-none cursor-pointer focus:border-red-500"
              value={city}
              onChange={handleInputChange}
            >
              <option className='cursor-pointer' value="">Choose Your Interested City</option>
              {cities.map((data, index) => (
                <option className='cursor-pointer' key={index} value={data}>
                  {data}
                </option>
              ))}
            </select>

          </div>

                {/* Destination section to show all the destinations  */}
                <Destinations results={results} />

            </div>

        </>
    );
}

export default SearchingPlaces;
