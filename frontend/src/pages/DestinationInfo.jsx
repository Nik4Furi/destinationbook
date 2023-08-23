import React from 'react'

import { Link, useParams } from 'react-router-dom'

import dest from '../assets/dest-1.jpg'
import DestinationCard from '../components/Home/DestinationCard'

const DestinationInfo = () => {
    const {id} = useParams();
    console.log('check id ',id);
    return (
        <>
            {/* Section to give it the info regarding to the specific place  */}
            <section id="DestinationInfo">
                <div className="container mx-auto my-2">
                    <div className="grid grid-cols-2 grid-gap-4">

                        {/* Images stuff to show images regarding to the destination  */}
                        <div>
                            <img src={dest} alt="Palace on wheels" className='w-2/3 rounded-md mx-auto' />
                        </div>

                        {/* Stuff to give the info regarding to the destination  */}
                        <div className="flex mx-2 my-3 flex-col">
                            <h3 className="text-xl font-bold my-1">Palace Of The Wheels, Move To Sky</h3>
                            <p className='my-1'>Palace of wheels is most epic place to deserve more and more views, actually that was built in 3 days, but its not actual surprise, Actual surprise is the beauty of the place, also we are providing the rooms to spent on it</p>
                            <p className='my-1'>Capacity: <strong>500</strong></p>
                            <p className='my-1'>Price of one seat: <strong>2,000</strong></p>

                            <Link to="/booknow"><button className=" bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Book Now</button></Link>
                        </div>
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
        </>
    )
}

export default DestinationInfo
