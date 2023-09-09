import React from 'react'

const ServiceCard = ({img, title,description}) => {
    return (
        <>
            <div className="cursor-pointer animate-service max-w-xs rounded overflow-hidden shadow-lg">
                {/* <img src={imageSrc} alt={heading} className="w-full" /> */}
                <div className="px-6 py-4">
                <h2 className="text-center text-4xl">{img}</h2>
                    <div className="font-bold text-lg text-center  mx-2">{title}</div>
                    <p className="text-gray-700 text-base">{description}</p>
                </div>
            </div>
        </>
    )
}

export default ServiceCard
