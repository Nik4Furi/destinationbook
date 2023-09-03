import React, { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { setUser } from '../../Store/UsersSlice'

import { toast } from 'react-toastify'

//Component'
import { setNotfications } from '../../Store/NotificationSlice'

const ProtectedRoute = ({ children }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [userdetails, setUserDetails] = useState(null);
    const [notifications, setNotification] = useState([]);

    //Check login user details and save into state
    const getUser = async () => {
        try {
            const token = localStorage.getItem('token');
            console.log('check token ', token, localStorage.getItem('token'));
            if (!token) {
                navigate('/login');
            }
            const res = await fetch(`${process.env.REACT_APP_API}user/getUser`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': `${token}`
                }
            });
            const data = await res.json();
            console.log('check user details ', data);

            setUserDetails(data.user);

            dispatch(setUser(data.user));

        } catch (error) {
            console.log('error ', error.message);
            toast.error(error.message);
            navigate('/login');
        }
    }

    //-------------------- Function to get all the notification of respective user
    const getAllNotifications = async () => {
        try {
            const token = localStorage.getItem('token');

            const res = await fetch(`${process.env.REACT_APP_API}notification/getAllNotifications`, {
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': token
                }
            });
            const data = await res.json();
            setNotification(data.notification);

            dispatch(setNotfications(data.notification));

        } catch (error) {
            console.log('error ', error);
        }
    }
    useEffect(() => {
        //Call the api to deatils of the login user
        getUser();

        //------ fetch all the notifications 
        getAllNotifications();
        // console.log('data is ',notifications);

        // dispatch(setNotfications(data));
        // const token = JSON.stringify(localStorage.getItem('token'));
        // console.log('check token ',typeof token,typeof localStorage.getItem('token'));
        console.log('check user state and details ', userdetails)
    }, []);

    return (
        <>
            {/* {userdetails && children} */}
            {children}
        </>
    )
}

export default ProtectedRoute
