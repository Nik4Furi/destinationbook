import React from 'react'
import { Link } from 'react-router-dom'

const DestinationCard = ({img,heading,descripiton,id}) => {
  return (
    <>
       <Link data-aos="zoom-in" to={`/destinationinfo/${id}`} className="animate-service max-w-xs my-2 mx-2 rounded-md overflow-hidden shadow-lg bg-slate-100">
                <img src={img} alt={heading} className="w-full" />
                <div className="px-6 py-4">
                    <div className="font-bold text-sm  mb-2">{heading}</div>
                    <p className="text-gray-700 text-base">{descripiton}</p>
                </div>
            </Link>
    </>
  )
}

export default DestinationCard
