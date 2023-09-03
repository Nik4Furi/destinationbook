import React, { useEffect } from 'react'
import {setUser} from '../Store/UsersSlice'
import { useNavigate } from 'react-router-dom';
import {useDispatch} from 'react-redux'

const Logout = () => {
    //---Find the token is exist
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    useEffect(()=>{
        localStorage.removeItem('token');
        dispatch(setUser(null));
        navigate('/');
    })

  return (
    <>
      <h1 className="text-red-500">Please wait to logout, Redirecting ...............</h1>
    </>
  )
}

export default Logout
