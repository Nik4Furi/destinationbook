import React, { useEffect, useState } from 'react'

import { Link, useNavigate, useParams } from 'react-router-dom'

import { useSelector } from 'react-redux'

import { toast } from 'react-toastify'

//Compoents Stuff
import DestinationCard from '../components/pages/Home/DestinationCard'
import Loading from '../components/Layout/Loaders/Loading'

const DestinationInfo = () => {
    
    const { id } = useParams();
    const navigate = useNavigate();

    const places = useSelector(state => state.places.places);
    // console.log('show places ',places);

    //States Specific Stuff
    const [place, setPlace] = useState();
    const [similiarPlaces,setSimiliarPlaces] = useState([]);

    const [loading, setLoading] = useState(false);

    //Calling the api function to checking the id of the destination is exist and show according those details 
    const showDetails = async () => {
        setLoading(true);
        try {
            const res = await fetch(`${process.env.REACT_APP_API}book/showDetails/${id}`);
            const data = await res.json();
            // console.log('check places ', data);

            setPlace(data.place);

            const city = data.place.location;
            const purpose = data.place.purpose;

            // To find the similiar places on the basis of city and purpose 
            const similiarPlaces = places.filter(item => (item.city === city || item.purpose === purpose));
            // console.log('similiar places ',similiarPlaces);

            setSimiliarPlaces(similiarPlaces);

        } catch (error) {
            // console.log('error ', error.message);
            toast.error(error);
            navigate('/');
        }
        setLoading(false);
    }


    useEffect(() => {
        showDetails();
    }, [])

    return (
        <>
            {loading ? <Loading />
                :
                <div>
                    {/* Section to give it the info regarding to the specific place  */}
                    <section id="DestinationInfo" style={{minHeight:'80vh'}}>
                        <div className="md:container mx-auto my-2">
                            <div className="grid md:grid-cols-2 gap-2">

                                {/* Images stuff to show images regarding to the destination  */}
                                {
                                    place && 
                             (
                                <>
                                <div className='col-span-1'>
                                    <img src={place.picture.url} alt={place.name} className='md:w-2/3 rounded-md mx-3 my-3' />
                                </div>

                                <div className="flex mx-2 my-3 flex-col col-span-4">
                                    <h3 className="text-xl font-bold my-1">{place.name}</h3>
                                    <p className='my-1'>{place.descripiton}</p>
                                    <p className='my-1'>Capacity: <strong>{place.capacity}</strong></p>
                                    <p className='my-1'>Price of one seat: <strong> <span className='text-green-700 '>&#x20B9;</span>{place.price}</strong></p>
                                    <p className='my-1'>Far From Metro/Station/Subways: <strong>{place.farFromMetro}</strong></p>

                                    <Link to={`/booknow/${place._id}`}><button className=" btn-primary py-2 px-4 rounded-md focus:outline-none ">Book Now</button></Link>
                                </div>
                                </>)
}
                            </div>
                        </div>
                    </section>


                    {/* Similiarly places to watch it, I will make changes for easy implmentations  */}
                    <section id="SimiliaryPlaces" className='container mx-auto my-4'>
                        <p className="text-sm my-1">See the similiar places , so get choice of your space 🚀</p>
                        <h1 className="text-3xl font-bold my-3">Similiar Places</h1>

                        <div className="container mx-auto">
                            <div className="grid grid-cols-3 grid-gap-3">
                                {
                                    similiarPlaces && similiarPlaces.map(item => (

                                        <DestinationCard link={`/booknow/${item._id}`} key={item._id} img={item.picture.url} heading={item.name} descripiton={item.descripiton} />
                                    ))
                                }
                                {/* <DestinationCard img={dest} heading={"A lot of choices"} descripiton={"Choose to best space is fit on you"} />
                                <DestinationCard img={dest} heading={"A lot of choices"} descripiton={"Choose to best space is fit on you"} /> */}

                            </div>
                        </div>
                    </section>
                </div>
            }
        </>
    )
}

export default DestinationInfo
