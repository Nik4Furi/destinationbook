import React, { useEffect, useState } from 'react'

import { Link, useNavigate, useParams } from 'react-router-dom'

import { toast } from 'react-toastify'

import dest from '../assets/dest-1.jpg'
import DestinationCard from '../components/Home/DestinationCard'
import Loading from '../components/Loading'

const DestinationInfo = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // console.log('check id ',id);

    const [place, setPlace] = useState();
    const [loading, setLoading] = useState(false);

    //Calling the api function to checking the id of the destination is exist and show according those details 
    const showDetails = async () => {
        setLoading(true);
        try {
            const res = await fetch(`${process.env.REACT_APP_API}book/showDetails/${id}`);
            const data = await res.json();
            console.log('check places ', data);
            setPlace(data.place);

        } catch (error) {
            console.log('error ', error.message);
            toast.error(error.message);
            navigate('/');
        }
        setLoading(false);
    }

    useEffect(() => {
        showDetails();
        console.log('check place',place);
    }, [])

    return (
        <>
            {loading ? <Loading />
                :
                <div>
                    {/* Section to give it the info regarding to the specific place  */}
                    <section id="DestinationInfo">
                        <div className="container mx-auto my-2">
                            <div className="grid grid-cols-2 grid-gap-4">

                                {/* Images stuff to show images regarding to the destination  */}
                                {
                                    place && 
                             (
                                <>
                                <div>
                                    <img src={place.picture.url} alt={place.name} className='w-2/3 rounded-md mx-auto' />
                                </div>

                                <div className="flex mx-2 my-3 flex-col">
                                    <h3 className="text-xl font-bold my-1">{place.name}</h3>
                                    <p className='my-1'>{place.descripiton}</p>
                                    <p className='my-1'>Capacity: <strong>{place.capacity}</strong></p>
                                    <p className='my-1'>Price of one seat: <strong>{place.price}</strong></p>

                                    <Link to={`/booknow/${place._id}`}><button className=" bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Book Now</button></Link>
                                </div>
                                </>)
}
                            </div>
                        </div>
                    </section>


                    {/* Similiarly places to watch it, I will make changes for easy implmentations  */}
                    <section id="SimiliaryPlaces" className='container mx-auto my-4'>
                        <h1 className="text-3xl font-bold my-3">Similiar places</h1>

                        <div className="container mx-auto">
                            <div className="grid grid-cols-3 grid-gap-3">
                                <DestinationCard img={dest} heading={"A lot of choices"} descripiton={"Choose to best space is fit on you"} />
                                <DestinationCard img={dest} heading={"A lot of choices"} descripiton={"Choose to best space is fit on you"} />
                                <DestinationCard img={dest} heading={"A lot of choices"} descripiton={"Choose to best space is fit on you"} />

                            </div>
                        </div>
                    </section>
                </div>
            }
        </>
    )
}

export default DestinationInfo
