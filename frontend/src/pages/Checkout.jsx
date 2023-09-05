import React, { useEffect, useState } from 'react'

import {Link} from 'react-router-dom'

import { useSelector } from 'react-redux'

import {toast} from 'react-toastify'

import Loading from '../components/Loading'

import DestinationCard from '../components/Checkout/DestinationCard'
import CheckoutCard from '../components/Checkout/CheckoutCard'


const Checkout = () => {
  const user = useSelector(state => state.users.user);

  const token = localStorage.getItem('token');

  const [bookingPlaces,setBookingPlaces] = useState([]); //to updating booking details by the users

  //-------------- Find the places which is booked by the users
  const fetchAllBooked  = async()=>{

    try {
      const res = await fetch(`${process.env.REACT_APP_API}book/fetchAllBooked`,{
        headers : {
          'auth-token' : token
        }
      });
      const data = await res.json();
      // console.log('data ',data);

      setBookingPlaces(data.places);

    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
      return;
    }
  }
  useEffect(()=>{
    fetchAllBooked(); //Fetch all booked places by this user

  
  },[]);

  //----------- Function to checkout or say payment route to payment by the user
  const handleCheckout = async()=>{
    //--------- Finding the totalPrice to booked
    let totalPrice = 0;

    bookingPlaces.forEach((item)=>{
      totalPrice += item.totalPrice;
      console.log(item.totalPrice);
    });

    console.log('price ',totalPrice);

    //-------- Payment route to payment by the users
  }

   //-------------- Function to remove the booking from the database
   const handleRemoveBoooking = async(id)=>{
    console.log(id);

    //First we remove from the array
    const newBookings = bookingPlaces.filter(item => item._id !== id);
    setBookingPlaces(newBookings);

    //----- Call the api to remove this booked place
    try {
      
    const res = await fetch(`${process.env.REACT_APP_API}book/removeBooked/${id}`,{
      method : 'DELETE',
      headers : {
        'auth-token' : token
      }
    })
      const data = await res.json();
      console.log('data ',data);

      if(data.success === true)
        toast.success(data.msg);
      else if(data.success === false)
        toast.error(data.msg);

    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  }

  if(!bookingPlaces)
    return <Loading />

  return (
    <>
      <section id="Checkout" style={{minHeight:"80vh"}}>
        <div className="container mx-auto my-3">

            <div className="grid grid-cols-4 gap-2">

            {/* Destination card to give info about the place, what they book  */}
            <div className="col-span-3">
              {
                bookingPlaces?.length===0  && <>
                  <h1 className="text-2xl my-2 mx-auto font-mono font-semibold text-red-500">No booking details is here to show you</h1>
                 <Link to="/"> <button className='mx-14  w-1/2 my-5 px-4 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600'>Go Home</button></Link>
                </>
              }
              {
                bookingPlaces && bookingPlaces.map((item) => (

                  <DestinationCard key={item._id} imageSrc={item.place_id.picture.url} title={item.name} capacity={23} price={item.place_id.price} location={item.location} start_date={item.start_date} end_date={item.end_date} start_time={item.start_time} end_time={item.end_time} id={item._id} handleRemoveBooking={handleRemoveBoooking} />
                ))
              }
            </div>

            {/* Checkout details to ensuring the billings  */}
            <div className="col-span-1">{ user &&
            <CheckoutCard name={user.name} address={user.address} handleCheckout={handleCheckout}  />}</div>

            </div>
        </div>
      </section>
    </>
  )
}

export default Checkout
