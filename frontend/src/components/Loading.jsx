import React from 'react'

import loading from '../assets/loading.webp'

const Loading = () => {
  return (
    <>
      <div className="container" >
        <img src={loading} alt="loading" style={{width: "45px", display: "inline-block", margin: "auto"}}/> 
      </div>
    </>
  )
}

export default Loading
