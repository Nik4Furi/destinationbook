import React, { useEffect, useState } from 'react'

import { useDispatch } from 'react-redux'
import { setUser } from '../../Store/UsersSlice'
import { setNotfications } from '../../Store/NotificationSlice'

//Component
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children }) => {
    const dispatch = useDispatch();

    const token = localStorage.getItem('token');

    const [userdetails, setUserDetails] = useState(null);
    const [notifications, setNotification] = useState([]);

    //Check login user details and save into state
    const getUser = async () => {
        try {
            if(token){
                const res = await fetch(`${process.env.REACT_APP_API}user/getUser`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'auth-token': `${token}`
                    }
                });
                const data = await res.json();

                dispatch(setUser(data.user));
            }            

        } catch (error) {
            console.log('error ', error.message);
        }
    }

    //-------------------- Function to get all the notification of respective user
    const getAllNotifications = async () => {
        try {

            if(token){
                const res = await fetch(`${process.env.REACT_APP_API}notification/getAllNotifications`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'auth-token': token
                    }
                });
                const data = await res.json();
    
                dispatch(setNotfications(data.notification));
            }

        } catch (error) {
            console.log('error ', error);
        }
    }
    useEffect(() => {
        //Call the api to deatils of the login user
        getUser();

        //------ fetch all the notifications 
        getAllNotifications();
    }, [token]);

    return (
        <>
            {/* Navbar Component  */}
            <Navbar />

            {children}

            {/* Footer Component  */}
            <Footer />
        </>
    )
}

export default Layout
