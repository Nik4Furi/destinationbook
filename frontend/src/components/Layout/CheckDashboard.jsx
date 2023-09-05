import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

const CheckDashboard = () => {
    const user = useSelector(state => state.users.user);
    const navigate = useNavigate();

    if(user.role === 'user')
        navigate('/userDashboard');

    else if(user.role === 'admin')
        navigate('/admin');
    
    else if(user.role === 'sponser')
        navigate('/sponser');

  return (
    <>
      <h2 className="text-2xl">Please wait, We are Redirecting ............</h2>
    </>
  )
}

export default CheckDashboard
