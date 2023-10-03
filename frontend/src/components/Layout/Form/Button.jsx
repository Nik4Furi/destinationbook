import React from 'react'

const Button = ({px='9',py='5',title,btntype="primary",mx='0',my='2',rounded='md'}) => {

  return (
    <>
      <button className={`btn-${btntype} mx-${mx} my-${my} focus:outline-none rounded-${rounded}`} style={{padding:`${py}px ${px}px`,margin:`${my}px ${mx}px`}}>{title}</button> 
    </>
  )
}

export default Button