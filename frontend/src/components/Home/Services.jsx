import React from 'react'
import ServiceCard from './ServiceCard'

const Services = () => {
    return (
        <>
            <div className="grid grid-cols-4 gap-1">
                <div className="max-w-xs rounded overflow-hidden shadow-lg">
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">What We serve 🔥</div>
                        <p className="text-gray-700 text-base">You can checkout many things like guider, spaces , services serve manner, and other things we provide our customers</p>
                    </div>
                </div>
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
            </div>
        </>
    )
}

export default Services
