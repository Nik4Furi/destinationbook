import React,{useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading';

const CheckDashboard = () => {
  const user = useSelector(state => state.users.user);
  const navigate = useNavigate();

  useEffect(() => {

    if (user.role === 'user')
      navigate('/userDashboard');

    else if (user.role === 'admin')
      navigate('/admin');

    else if (user.role === 'sponser')
      navigate('/sponser');
  }, []);

  if (!user) {
    return <Loading />
  }

  return (
    <>
      <h2 className="text-2xl">Please wait, We are Redirecting ............</h2>
    </>
  )
}

export default CheckDashboard
