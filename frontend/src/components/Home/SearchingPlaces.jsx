import React, { useState } from 'react';

import { useSelector } from 'react-redux';


import CategoriesBtns from './CategoriesBtn'
import Destinations from './Destinations'

const SearchingPlaces = () => {
    const places = useSelector(state => state.places.places);
    // console.log(places);

    const [query, setQuery] = useState('');
    const [results,setResults] = useState([]);

    const [categoriesBtn,setCategoriesBtn] = useState(['Recently','NearBy'])

    const handleInputChange = (e) => {
        const { value } = e.target;
        setQuery(value);

        const filteredResults = places.filter((item) =>
            item.name.toLowerCase().includes(value.toLowerCase())
        );

        console.log('filter result ',filteredResults);

        setResults(filteredResults);
    };

    return (
        <>
            

            <div className="container mx-auto p-4 my-2">
                {/* Categories buttong to help for quick searching  */}
            {/* <CategoriesBtns category={categoriesBtn} /> */}

                <input
                    type="text"
                    placeholder="🔍 nearby, recently, or use like this keywords to make your search fast ..."
                    className=" rounded-md bg-slate-100  p-2 w-full mb-4"
                    value={query}
                    onChange={handleInputChange}
                    style={{border:'1px solid black'}}
                />


                {/* Destination section to show all the destinations  */}
                <Destinations results={results} />

            </div>

        </>
    );
}

export default SearchingPlaces;
