import React,{useEffect} from 'react'

import { useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux'

//Component
import MainLoader from '../Loaders/MainLoader'

const CheckDashboard = () => {

  const navigate = useNavigate();

  const user = useSelector(state => state.users.user);

  useEffect(() => {

    if (user.role === 'user')
      navigate('/userDashboard');

    else if (user.role === 'admin')
      navigate('/admin');

    else if (user.role === 'sponser')
      navigate('/sponser');
  }, []);

  if (!user) {
    return <MainLoader />
  }

  return (
    <>
      <h2 className="text-2xl">Please wait, We are Redirecting ............</h2>
    </>
  )
}

export default CheckDashboard
