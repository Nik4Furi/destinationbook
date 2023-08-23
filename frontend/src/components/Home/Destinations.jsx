import React from 'react'
import DestinationCard from './DestinationCard'

import dest from '../../assets/dest-1.jpg'

const Destinations = () => {
    return (
        <>
            <div className="container mx-auto">
                <div className="grid grid-cols-3 grid-gap-3">
                    <DestinationCard img={dest} heading={"A lot of choices"} descripiton={"Choose to best space is fit on you"} />
                    <DestinationCard img={dest} heading={"A lot of choices"} descripiton={"Choose to best space is fit on you"} />
                    <DestinationCard img={dest} heading={"A lot of choices"} descripiton={"Choose to best space is fit on you"} />
                    <DestinationCard img={dest} heading={"A lot of choices"} descripiton={"Choose to best space is fit on you"} />
                    <DestinationCard img={dest} heading={"A lot of choices"} descripiton={"Choose to best space is fit on you"} />
                    <DestinationCard img={dest} heading={"A lot of choices"} descripiton={"Choose to best space is fit on you"} />
                </div>
            </div>
        </>
    )
}

export default Destinations
