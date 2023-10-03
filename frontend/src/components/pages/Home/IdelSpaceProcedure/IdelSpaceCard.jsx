import React from 'react'
import { Link } from 'react-router-dom'

const IdelSpaceCard = ({img,title,description,link, dataaosduration}) => {
  return (
    <>
      <div className='mx-2 my-3 w-1/4 shadow-lg p-3 ' data-aos="fade-up"  data-aos-duration={dataaosduration} >
        <img src={img} alt={title} className='block mx-auto shadow-lg' />

        <h3 className="text-lg my-1 font-semibold">{title}</h3>
        <p className="text-md my-3">{description}</p>
        {
            link && 
            <Link  to={`/${link}`} className='capitalize'> <button className=" btn-secondary"> {title}</button></Link>
        }
      </div>
    </>
  )
}

export default IdelSpaceCard
