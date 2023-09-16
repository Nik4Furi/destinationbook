import React, { useEffect,useState } from 'react'

import { useNavigate, useSearchParams } from 'react-router-dom'

import {useDispatch} from 'react-redux'

import { toast } from 'react-toastify';

import Loading from '../components/Loading';
import { emptyBooking } from '../Store/BookingSlice';

const PaymentVerfication = () => {
    const dispatch = useDispatch();

    const token = localStorage.getItem('token');
    
    const query = useSearchParams()[0];

    const referenceid = query.get('referenceid');

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    //--------- Call the api to check the reference id is match with payment id
    const MatchReferenceId = async () => {
        setLoading(true);
        try {
            const res = await fetch(`${process.env.REACT_APP_API}payment/matchReference`, {
                method : 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': token
                },
                body: JSON.stringify({ referenceid })
            });
            const data = await res.json();
            console.log('data ', data);

            if (data.success === true){
                //--------------- if data success then can call the api to removing  or can say empty the booking stuff of users

                //State level 
                // dispatch(emptyBooking())

                //--------- Calling api
                // const res = await fetch(`${process.env.REACT_APP_API}book/empty`,{
                //     method : 'DELETE',
                //     headers : {
                //         'auth-token' : token
                //     }
                // });
                // const data = await res.json();
                // console.log('empty the booking controller ',data);

                navigate('/paymentSuccess');
            }
            else if (data.success === false)
                navigate('/paymentError');

        } catch (error) {
            console.log(error);
            navigate('/checkout');
            toast.error(error);
        }
        setLoading(false);
    };

    useEffect(()=>{
        MatchReferenceId() //match the payment id is correct
    },[]);


    return (
        <>
            <section id="PaymentVerfication" className='my-3 mx-2'>
                {loading && <Loading />}
                <h2 className="text-center text-2xl font-bold text-highlight">Wait We Are Check Your Payment Successed Or Not..Redirecting....</h2>
            </section>
        </>
    )
}

export default PaymentVerfication
