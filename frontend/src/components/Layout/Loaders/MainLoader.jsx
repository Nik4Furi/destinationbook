import React from 'react'

import main_loader from '../../../assets/main-loader.gif'

const MainLoader = ({width="100px",top='45%',left='50%'}) => {
  return (
    <>
      <section id="MainLoader" className='relative ' style={{top:`${top}`,left:`${left}`}}>
        {/* <div className="container mx-auto"> */}
            <img src={main_loader} alt="loading..."  width={width}/>
        {/* </div> */}
      </section>
    </>
  )
}

export default MainLoader
