import React from 'react'
import { Link } from 'react-router-dom'

const DestinationCard = ({img,heading,descripiton,id,link,capacity,price}) => {
  
  return (
    <>
       <Link data-aos="zoom-in" to={link} className="animate-service max-w-xs my-2 mx-2 rounded-md shadow-lg bg-slate-100 card-img-hover">
       {/* <Link data-aos="zoom-in" to={`/booknow/${id}`} className="animate-service max-w-xs my-2 mx-2 rounded-md shadow-lg bg-slate-100 card-img-hover"> */}
                <img src={img} alt={heading} className="w-full " />
                <div className="px-6 py-4">
                    <h4 className="font-bold text-lg  mb-2 ">{heading}</h4>
                    <p className="">{descripiton}...</p>

                    <div className="flex items-center justify-between mt-3 md:flex-row flex-col">
                  {capacity && <p className='text-center md:text-start'>Capacity: <strong>{capacity}</strong></p>}
               { price &&   <p className='text-center md:text-start'>Price: <strong>&#x20B9;{price}</strong><span className="text-highlight text-xs">*For one seat</span></p>}

                </div>
                </div>
                
            </Link>
    </>
  )
}

export default DestinationCard
