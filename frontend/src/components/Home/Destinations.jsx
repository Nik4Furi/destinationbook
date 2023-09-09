import React, { useEffect, useState } from 'react'

import {useDispatch, useSelector} from 'react-redux';
import {setPlaces} from '../../Store/PlacesSlice'

import DestinationCard from './DestinationCard'

import dest from '../../assets/dest-1.jpg'

import Loading from '../Loading'

const Destinations = ({results}) => {
    const [placesDetails,setPlacesDetails] = useState([]);
    const [loading,setLoading] = useState(false);

    const places = useSelector(state => state.places);
   
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

    useEffect(()=>{
        fetchAllPlaces(); //Fetching places for all
        // console.log('check places and details ',places,placesDetails);
    },[])

    return (
        <>
            <div className="container mx-auto">
                <div className="grid md:grid-cols-3 gap-3 grid-cols-2">
                    {  loading && <Loading /> }
                    {
                        (results.length === 0 || !results)
                        ?
                        places && places.places.map((item)=>{
                            return  <DestinationCard key={item._id} img={item.picture.url} heading={item.name} descripiton={item.description.substr(0,90)} id={item._id} />
                        })
                   :
                        results && results.map((item)=>{
                            return  <DestinationCard key={item._id} img={item.picture.url} heading={item.name} descripiton={(item.description).substr(0,90)} id={item._id} />
                        })
                    }
                    {/* <DestinationCard img={dest} heading={"A lot of choices"} descripiton={"Choose to best space is fit on you"} />
                    <DestinationCard img={dest} heading={"A lot of choices"} descripiton={"Choose to best space is fit on you"} />
                    <DestinationCard img={dest} heading={"A lot of choices"} descripiton={"Choose to best space is fit on you"} />
                    <DestinationCard img={dest} heading={"A lot of choices"} descripiton={"Choose to best space is fit on you"} />
                    <DestinationCard img={dest} heading={"A lot of choices"} descripiton={"Choose to best space is fit on you"} />
                    <DestinationCard img={dest} heading={"A lot of choices"} descripiton={"Choose to best space is fit on you"} /> */}
                </div>
            </div>
        </>
    )
}

export default Destinations
