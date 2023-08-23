import React from 'react'

const Testimonials = ({name,description}) => {
    return (
        <>
            <div className="bg-slate-100 rounded-lg shadow-md p-4">
                <p className="text-gray-700 text-base">{description}</p>
                <p className="text-gray-500 text-sm mt-2">{name}</p>
            </div>
        </>
    )
}

export default Testimonials
