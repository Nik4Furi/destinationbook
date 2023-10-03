import React from 'react'

const Testimonials = ({name,description}) => {
    return (
        <>
            <div data-aos="fade-right" className="col-span-1 bg-slate-100 rounded-lg shadow-md p-4 relative">
                <h1 className='text-red-400 font-semibold absolute text-6xl top-0 left-0'>"</h1>
                <p className="text-gray-700 text-base p-2">{description}</p>
                <p className="text-gray-900 text-sm mt-2">{name}</p>
            </div>
        </>
    )
}

export default Testimonials
