import React, { useEffect, useState } from 'react'

import {useDispatch, useSelector} from 'react-redux';
import {setPlaces} from '../../../Store/PlacesSlice'

//Component
import DestinationCard from './DestinationCard'
import MainLoader from '../../Layout/Loaders/MainLoader'

const Destinations = ({results}) => {

    const [placesDetails,setPlacesDetails] = useState([]);
    const [loading,setLoading] = useState(false);

    const places = useSelector(state => state.places.places);
   
    const dispatch = useDispatch();

    //Function to fetch all the destination 
    const fetchAllPlaces = async()=>{
        setLoading(true);
        try {
            const res = await fetch(`${process.env.REACT_APP_API}book/fetchPlaces`);
            const data = await res.json();
            // console.log('check data ',data, data.data);

            dispatch(setPlaces(data.data));

            setPlacesDetails(data.data);
            console.log('check places ',places.places.length);

        } catch (error) {
            console.log(error.message);
        }
        setLoading(false);
    }

    // useEffect(()=>{
    //     // fetchAllPlaces(); //Fetching places for all
    //     // console.log('check places and details ',places,placesDetails);
    // },[])

    return (
        <>
            <div className="container mx-auto">
                <div className="grid md:grid-cols-3 gap-3 grid-cols-2">
                    {  loading && <MainLoader /> }
                    {
                        (results.length === 0 || !results)
                        ? places && places.map((item)=>{
                            return  <DestinationCard key={item._id} img={item.picture.url} heading={item.name} descripiton={item.description.substr(0,90)} id={item._id} />
                        })
                   : results && results.map((item)=>{
                            return  <DestinationCard key={item._id} link={`/booknow/${item._id}`} img={item.picture.url} heading={item.name} descripiton={(item.description).substr(0,90)}  />
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Destinations
