import React, { useEffect, useMemo, useState } from 'react';

import { useSearchParams } from 'react-router-dom';

//Store Specific Stuff
import { useDispatch, useSelector } from 'react-redux';
import { setPlaces } from '../Store/PlacesSlice';

//Global Functions
import { Cities, Purposes, BookingSlots } from '../GloballyFunctions';

//Components
import DestinationCard from '../components/pages/Home/DestinationCard';
import MainLoader from '../components/Layout/Loaders/MainLoader'
import Button from '../components/Layout/Form/Button'

const Spaces = () => {
    // ------------- Our permanent stuff to use to allocating the search locations  
    // console.log('cities and places ', Cities, Purposes);
    const query = useSearchParams()[0];
    const spaceType = query.get('space'); //Reference of the payment id

    const dispatch = useDispatch();

    const places = useSelector(state => state.places.places);
    //Function to call the api to fetching all the places 
    const [filterData, setFilterData] = useState(places);

    const fetchPlaces = async () => {

        try { //Call the api to fetching data
            const res = await fetch(`${process.env.REACT_APP_API}book/fetchPlaces`);
            const data = await res.json();

            // console.log('fetch places data ', data);

            let place = data.data;
            setFilterData(place);
            dispatch(setPlaces(place));
            return place.length;


        } catch (error) {
            //  console.log(error); 
            }
    }
    useEffect(() => {

        fetchPlaces(); // Api to fetch all the places

        if (spaceType) {
            setSelectedPurpose(spaceType)
            const data = filterData.filter(item => (item.purpose === spaceType));
            // console.log('space type data ', data);
            setFilterData(data);
        }
        // },[fetchPlaces]);
    }, []);
    // },[checkUpdatePlace]);
    // console.log('fetching the places ', places);

    // States Specific Stuff--------------------X
    const [searchQuery, setSearchQuery] = useState(''); //For input the data
    const [selectedPurpose, setSelectedPurpose] = useState(spaceType || ''); //choose the purpose
    const [selectedCity, setSelectedCity] = useState(''); //select the city
    const [selectedBookingSlots, setSelectedBookingSlots] = useState(''); //select the city
    const [selectedPriceComparison, setSelectedPriceComparison] = useState(''); //to increasing and descreasing data in manner of price
    const [selectedCapacityComparison, setSelectedCapacityComparison] = useState(''); //to increasing and descreasing data in manner of price



    //------------- Function Specific Stuff to handle the data for query
    const handleSearchQueryChange = (event) => {
        setSearchQuery(event.target.value);

        // Write function to filter data when keyup
        let query = event.target.value;
        query = query.toLowerCase();

        const data = filterData.filter(item => (item.name === query))

        if (filterData.length <= 0) {
            //function to search all the keywords
            const data = [];

            //1. Find the keywords in all the array data
            for (const items of places) {

                const keywords = items.keywords;
                // console.log('fetching all the keywords ', keywords);

                if (keywords.includes(query))
                    data.push(items);
            };

            if (data.length <= 0)
                return;

            setFilterData(data);
            return;
        };

        setFilterData(data);
    };

    const handlePurposeChange = (event) => {
        setSelectedPurpose(event.target.value);

        let query = event.target.value;
        query = query.toLowerCase();

        const data = filterData.filter(item => (item.purpose === query));
        setFilterData(data);
    };

    const handleCityChange = (event) => {
        setSelectedCity(event.target.value);

        let query = event.target.value;
        query = query.toLowerCase();

        const data = filterData.filter(item => (item.city === query || item.location === query));
        // console.log('fiter by city ', data);
        setFilterData(data);
    };

    const handleBookingSlotsChange = (event) => {
        setSelectedBookingSlots(event.target.value);

        let query = event.target.value;
        query = query.toLowerCase();

        const data = filterData.filter(item => (item.booking_slots === query));
        setFilterData(data);
    };

    const handlePriceComparisonChange = (event) => {
        setSelectedPriceComparison(event.target.value);

        let query = event.target.value;
        query = query.toLowerCase();
        // console.log('query for price ', query);

        if (query === 'greater') {
            const data = [...filterData].sort((a, b) => b.price - a.price);
            setFilterData(data);

            return;
        }

        //Increasing order of the data
        const data = [...filterData].sort((a, b) => a.price - b.price);
        setFilterData(data);

        return;
    };

    const handleCapacityComparisonChange = (event) => {
        setSelectedCapacityComparison(event.target.value);

        let query = event.target.value;
        query = query.toLowerCase();

        if (query === 'greater') {
            const data = [...filterData].sort((a, b) => b.capacity - a.capacity);
            setFilterData(data);

            return;
        }

        //Increasing order of the data

        const data = [...filterData].sort((a, b) => a.capacity - b.capacity);
        setFilterData(data);

        return;
    };

    //--------------------- function to clear all the data
    const handleAllClear = () => {
        setFilterData(places);

        setSearchQuery('');

        setSelectedCity('');

        setSelectedCapacityComparison('');

        setSelectedPriceComparison('');

        setSelectedPurpose('')
    }

    return (
        <>
            <section id="Searching">
                <div className="container mx-auto mt-10 p-5 min-h-full">

                    <div className="mb-4">
                        <input
                            type="search"
                            placeholder="Search space by title, keywords ..."
                            className="w-full rounded-lg p-3 border border-black focus:outline-none focus:border-red-500"

                            value={searchQuery}
                            onChange={handleSearchQueryChange}
                        />
                    </div>

                    <div className="flex my-2 items-center w-full md:flex-nowrap flex-wrap md:flex-row">

                        <div className='w-[45%] md:w-[40%] mx-2 my-2'>
                            <select
                                className="w-full rounded-lg p-3 border border-black focus:outline-none cursor-pointer focus:border-red-500"
                                value={selectedPurpose}
                                onChange={handlePurposeChange}
                            >
                                <option className='cursor-pointer' value="">Choose Your Purpose</option>
                                {Purposes.map((purpose, index) => (
                                    <option className='cursor-pointer' key={index} value={purpose}>
                                        {purpose}
                                    </option>
                                ))}
                            </select>

                        </div>

                        <div className='w-[45%] md:w-[40%] mx-2 my-2'>
                            <select
                                id="city"
                                name='city'
                                className="w-full rounded-lg p-3 border border-black focus:outline-none cursor-pointer focus:border-red-500"
                                value={selectedCity}
                                onChange={handleCityChange}
                            >
                                <option className='cursor-pointer' value="">Choose Your Interested City</option>
                                {Cities.map((data, index) => (
                                    <option className='cursor-pointer' key={index} value={data}>
                                        {data}
                                    </option>
                                ))}
                            </select>

                        </div>


                        <div className='w-[45%] md:w-[40%] mx-2 my-2'>
                            <select
                                className="w-full rounded-lg p-3 border border-black focus:outline-none cursor-pointer focus:border-red-500"
                                value={setSelectedBookingSlots}
                                onChange={handleBookingSlotsChange}
                            >
                                <option className='cursor-pointer' value="">Choose Your Slots</option>
                                {BookingSlots.map((slots, index) => (
                                    <option className='cursor-pointer' key={index} value={slots}>
                                        {slots}
                                    </option>
                                ))}
                            </select>

                        </div>

                        <div className='w-[45%] md:w-[40%] mx-2 my-2'>
                            <select
                                value={selectedPriceComparison}
                                className="w-full rounded-lg p-3 border border-black focus:outline-none cursor-pointer focus:border-red-500"
                                onChange={handlePriceComparisonChange}
                            >
                                <option value="">Price Comparison</option>
                                <option value="greater">Higher</option>
                                <option value="less">Lower</option>
                            </select>
                        </div>

                        <div className='w-[45%] md:w-[40%] mx-2 my-2'>
                            <select
                                value={selectedCapacityComparison}
                                className="w-full rounded-lg p-3 border border-black focus:outline-none cursor-pointer focus:border-red-500"
                                onChange={handleCapacityComparisonChange}
                            >
                                <option value="">Capacity Comparison</option>
                                <option value="greater">Higher</option>
                                <option value="less">Lower</option>
                            </select>
                        </div>

                        <div onClick={() => handleAllClear()}><Button title={'Clear'} btntype={'secondary'} /></div>

                    </div>


                </div>

            </section>

            <section id='FilterSpaces'>
                <div className="container my-5 mx-auto p-3">
                    <p className="text-sm my-1">Showing your preference related spaces here</p>
                    <h2 className="text-xl font-bold mb-2">Now To Match Your Choice With Spaces 🚀</h2>
                    <div className='grid md:grid-cols-3 gap-4 grid-cols-2'>
                        {
                            //    <MainLoader />
                            !filterData && <MainLoader />
                        }
                        {
                            filterData.length <= 0 && <>
                                <h3 className="text-center text-lg my-3">No Matching Items Found: Clear Preferences👉 </h3>  <div onClick={() => handleAllClear()} className={`inline`}><Button title={'Clear'} btntype='secondary' /></div>
                            </>
                        }
                        {filterData.map((item, index) => (
                            <DestinationCard key={item._id} img={item.picture.url} heading={item.name} descripiton={item.description.substr(0, 30)} link={`/booknow/${item._id}`} price={item.price} capacity={item.capacity} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Spaces;
