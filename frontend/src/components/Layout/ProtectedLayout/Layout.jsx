import React, { useEffect} from 'react'

//--------- Store Specific Stuff
import { useDispatch } from 'react-redux'
import { setUser } from '../../../Store/UsersSlice'
import { setNotifications } from '../../../Store/NotificationSlice'

//Component
import Navbar from '../Navbar'
import Footer from '../Footer'
import { Token } from '../../../GloballyFunctions'

const Layout = ({ children }) => {
    
    //---------------- Store Specific Stuff   
    const dispatch = useDispatch();


    //Check login user details and save into state
    const getUser = async () => {
        try {
            if (Token) {
                const res = await fetch(`${process.env.REACT_APP_API}user/getUser`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'auth-token': Token
                    }
                });
                const data = await res.json();

                dispatch(setUser(data.user));
            }

        } catch (error) {
            console.log('error ', error);
        }
    }
    //-------------------- Function to get all the notification of respective user
    const getAllNotifications = async () => {
        try {

            if (Token) {
                const res = await fetch(`${process.env.REACT_APP_API}notification/getAllNotifications`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'auth-token': Token
                    }
                });
                const data = await res.json();

                dispatch(setNotifications(data.notification));
            }

        } catch (error) {
            console.log('error ', error);
        }
    }

    // const checkPlace = useMemo(()=> { return fetchPlaces,[places]});
    // console.log('check place use memo ',checkPlace);

    useEffect(() => {
        if(Token !== null){
            //Call the api to deatils of the login user
            getUser();

            //------ fetch all the notifications 
            getAllNotifications();
        }
    });

    return (
        <>
            {/* Navbar Component  */}
            <Navbar />

            {/* Content Children components to show the data of pages  */}
            {children}

            {/* Footer Component  */}
            <Footer />
        </>
    )
}

export default Layout
