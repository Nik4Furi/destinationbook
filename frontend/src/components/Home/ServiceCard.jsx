import React from 'react'

const ServiceCard = () => {
    return (
        <>
            <div className="max-w-xs rounded overflow-hidden shadow-lg">
                {/* <img src={imageSrc} alt={heading} className="w-full" /> */}
                <div className="px-6 py-4">
                <h2 className="text-highlight text-xl">🌎</h2>
                    <div className="font-bold text-sm  mb-2">A lot of choices</div>
                    <p className="text-gray-700 text-base">We suggest you to lot of choices to chosen best fit for your spaces respective</p>
                </div>
            </div>
        </>
    )
}

export default ServiceCard
