import React from 'react'
import ServiceCard from './ServiceCard'

const Services = () => {
    return (
        <>
            <div className="grid grid-cols-4 gap-1">
                <div className="max-w-xs rounded overflow-hidden shadow-lg">
                    <div className="px-6 py-4">
                        <h3 className="text-sm mb-2">What We serve</h3>
                        <h1 className="font-bold text-lg mb-2">Top Values For You 🔥</h1>
                        <p className="text-gray-700 text-base">Try variety of benefits when using our services</p>
                    </div>
                </div>
                <ServiceCard img={"🌎"} title={"Lot Of Choices"} description={"total 400+ destination work with us"} />
                            <ServiceCard img={"🎒"} title={"Best Tour Guides"} description={"Our tour guid have 5+ expereince"} />
                            <ServiceCard img={"💳"} title={"Easy Booking"} description={"With an easy and fast ticket purchase process"} />
            </div>
        </>
    )
}

export default Services
