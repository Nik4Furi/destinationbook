import React, { useEffect, useState } from 'react'

import {Link} from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'

import {toast} from 'react-toastify'

import Loading from '../components/Loading'

import DestinationCard from '../components/Checkout/DestinationCard'
import CheckoutCard from '../components/Checkout/CheckoutCard'
import { fetchBooking } from '../Store/BookingSlice'


const Checkout = () => {

  const dispatch = useDispatch();

  const user = useSelector(state => state.users.user);

  const notifications = useSelector(state => state.notification.notifications);

  const booking = useSelector(state => state.booking);
  console.log('fetch all bookings');

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

      console.log('check data of booking ',data);

      dispatch(fetchBooking(data.places));

      setBookingPlaces(data.places);

    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
      return;
    }
  }

  const [totalPrice,setTotalPrice] = useState(0) //To show the total Price
  const [status,setStatus] = useState(''); //Show the status of the place

  useEffect(()=>{
    fetchAllBooked(); //Fetch all booked places by this user

  
    //---------Finding the totalPrice 
    let totalPrice = 0,pendingStatus=0;

    bookingPlaces.forEach((item)=>{
      console.log('status of the booking places ',item.status);
      if(item.status === 'pending')
        pendingStatus+=1;
      else 
        totalPrice += item.totalPrice;
    });
console.log(pendingStatus, 'no of pending status');
    if(pendingStatus > 0)
      setStatus('pending');
    else 
      setStatus('success');

    setTotalPrice(totalPrice);
  },[notifications,booking]);

  console.log('booking places ',bookingPlaces);

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

   /* //---------- Filter out the notification where match the id of bookingPlace
    console.log('id is removing ',id);
    console.log('booking place details where id is match ',bookingPlaces.filter(item => item._id === id));

    console.log('check details of the notifications ',notifications); */

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

            <div className="grid md:grid-cols-4 gap-2 grid-cols-2">

            {/* Destination card to give info about the place, what they book  */}
            <div className="md:col-span-3 p-3 col-span-5"> 
              {
                bookingPlaces?.length===0  && <>
                  <h1 className="text-start text-highlight text-lg my-2 mx-auto ">No booking details is here to show you, book Now!</h1>
                 <Link to="/"> <button className='mx-4 text-xl w-1/2 my-5 px-4  py-2 rounded-md btn-primary focus:outline-none '>Go Home</button></Link>
                </>
              }
              {
                bookingPlaces && bookingPlaces.map((item) => (

                  <DestinationCard key={item._id} imageSrc={item.place_id?.picture?.url} title={item.name} capacity={23} price={item.place_id?.price} location={item.location} start_date={item.start_date} end_date={item.end_date} start_time={item.start_time} end_time={item.end_time} id={item._id} handleRemoveBooking={handleRemoveBoooking} status={item.status} />
                ))
              }
            </div>

            {/* Checkout details to ensuring the billings  */}
            <div className="col-span-2 mx-3 md:mx-0">{ user &&
            <CheckoutCard name={user.name} address={user.address} handleCheckout={handleCheckout} status={status} />}</div>

            </div>
        </div>
      </section>
    </>
  )
}

export default Checkout
