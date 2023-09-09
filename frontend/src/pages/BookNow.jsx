import React, { useEffect, useState } from 'react'
import BookingForm from '../components/Booking/BookingForm'


import dest from '../assets/dest-1.jpg'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const BookNow = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const places = useSelector(state => state.places.places);
    console.log('all places ', places);

    const [chosePlace, setChosePlace] = useState();


    // -------------------------- When come this page checkout which place is chose by the users
    useEffect(() => {
        const findPlace = places?.filter((item) => item._id === id);
        if (findPlace?.length === 0 || !findPlace)
            navigate(-1);
        // console.log('find place ',findPlace);

        setChosePlace(findPlace);

    }, [])
    console.log('check chose place ', chosePlace);

    return (
        <>
            <section id="Booking" className='bg-slate-100 my-0 py-0'>
                <div className="container mx-auto ">
                    <div className="grid md:grid-cols-2 gap-3">

                        {/* Summary about the what place would you want to book  */}
                        <div className="container mx-auto my-2">
                            <div className="flex flex-col items-center">

                                {
                                    chosePlace?.map((item) => (
                                        <div key={item._id}>
                                            {/* Images stuff to show images regarding to the destination  */}
                                            <div>
                                                <img src={item.picture.url} alt={
                                                    item.name
                                                } className='w-2/3 rounded-md mx-auto my-2' />
                                            </div>

                                            {/* Stuff to give the info regarding to the destination  */}
                                            <div className="flex mx-2 my-3 items-center flex-col">
                                                <h3 className="text-xl font-bold my-1">{item.name}</h3>
                                                <p className='my-1'>{item.description}</p>
                                                <p className='my-1'>Capacity: <strong>{item.capacity}</strong></p>
                                                <p className='my-1'>Price of one seat: <strong> <span className='text-green-700 '>&#x20B9;</span>{item.price}</strong></p>


                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>


                        {/* Filling the form to book now  */}
                        <div>
                            <BookingForm id={id} findPlace={chosePlace} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BookNow
