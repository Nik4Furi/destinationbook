import React from 'react'
import BookingForm from '../components/Booking/BookingForm'

import dest from '../assets/dest-1.jpg'

const BookNow = () => {
    return (
        <>
            <section id="Booking" className='bg-slate-100 my-0 py-0'>
                <div className="container mx-auto ">
                    <div className="grid grid-cols-2 grid-gap-3">

                        {/* Summary about the what place would you want to book  */}
                        <div className="container mx-auto my-2">
                            <div className="flex flex-col items-center">

                                {/* Images stuff to show images regarding to the destination  */}
                                <div>
                                    <img src={dest} alt="Palace on wheels" className='w-2/3 rounded-md mx-auto my-2' />
                                </div>

                                {/* Stuff to give the info regarding to the destination  */}
                                <div className="flex mx-2 my-3 items-center flex-col">
                                    <h3 className="text-xl font-bold my-1">Palace Of The Wheels, Move To Sky</h3>
                                    <p className='my-1'>Palace of wheels is most epic place to deserve more and more views, actually that ...</p>
                                    <p className='my-1'>Capacity: <strong>500</strong></p>
                                    <p className='my-1'>Price of one seat: <strong>2,000</strong></p>


                                </div>
                            </div>
                        </div>


                        {/* Filling the form to book now  */}
                        <div>
                            <BookingForm />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BookNow
