import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'

//Store Specific Stuff
import { useDispatch, useSelector } from 'react-redux'
import { fetchBooking, removeBooking } from '../Store/BookingSlice'

import { toast } from 'react-toastify'

//Components
import MainLoader from '../components/Layout/Loaders/MainLoader'
import DestinationCard from '../components/pages/Checkout/DestinationCard'
import CheckoutCard from '../components/pages/Checkout/CheckoutCard'
import { Token } from '../GloballyFunctions'


const Checkout = () => {

  const dispatch = useDispatch();

  const user = useSelector(state => state.users.user);

  const notifications = useSelector(state => state.notification.notifications);

  const booking = useSelector(state => state.booking);
  // console.log('fetch all bookings ',booking);

  const [bookingPlaces, setBookingPlaces] = useState([]); //to updating booking details by the users

  //-------------- Find the places which is booked by the users
  const fetchAllBooked = async () => {

    try {
      const res = await fetch(`${process.env.REACT_APP_API}book/fetchAllBooked`, {
        headers: {
          'auth-token': Token
        }
      });
      const data = await res.json();

      // console.log('check data of booking ', data);

      dispatch(fetchBooking(data.places));

      setBookingPlaces(data.places);

    } catch (error) {
      // console.log(error);
      toast.error(error);
      return;
    }
  }

  const [totalPrice, setTotalPrice] = useState(0) //To show the total Price
  const [status, setStatus] = useState(''); //Show the status of the place

  useEffect(() => {
    fetchAllBooked(); //Fetch all booked places by this user


    //---------Finding the totalPrice 
    let totalPrice = 0, pendingStatus = 0;

    bookingPlaces.forEach((item) => {
      // console.log('status of the booking places ', item.status);
      if (item.status === 'pending')
        pendingStatus += 1;
      else
        totalPrice += item.totalPrice;
    });
    // console.log(pendingStatus, 'no of pending status');
    if (pendingStatus > 0)
      setStatus('pending');
    else
      setStatus('success');

    setTotalPrice(totalPrice);
  }, [notifications, booking]);

  // console.log('booking places ', bookingPlaces);

  //----------- Function to checkout or say payment route to payment by the user
  const handleCheckout = async () => {
    //--------- Finding the totalPrice to booked
    let amount = 0;

    bookingPlaces.forEach((item) => {
      amount += item.totalPrice;
      // console.log(item.totalPrice);
    });

    // console.log('---------------total price ', amount);
    //-------- Payment route to creating order by the users--------------------
    let data;
    try {
      const res = await fetch(`${process.env.REACT_APP_API}payment/checkout`, {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json',
          'auth-token': Token
        },
        body: JSON.stringify({amount})
      })
      data = await res.json();
      // console.log('order creation of the data ', data);

    } catch (error) {
      // console.log(error)
      toast.error(error);
    }

    //----------- Creating the options to apply callback
    // console.log('key id ',process.env.REACT_APP_RAZORPAY_KEY_ID);
    try {
      
    
    const options = {
      "key": process.env.REACT_APP_RAZORPAY_KEY_ID, // Enter the Key ID generated from the Dashboard
      "amount": totalPrice, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      "currency": "INR",
      "name": "officelelo",
      "description": "Pay to book a place, and get enjoy",
      // "image": "https://avatars.githubusercontent.com/u/91304976?v=4",
      "order_id": data.order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      "callback_url": `${process.env.REACT_APP_API}payment/paymentverification`,
      "prefill": {
        "name": user.name,
        "email": user.email,
        "contact": user.phone
      },
      "notes": {
        "address": user?.address
      },
      "theme": {
        "color": "#E55B38"
      }
    };
    var razorPay = window.Razorpay(options);

    razorPay.open();
  } catch (error) {
      // console.log(error);
      toast.error(error);
  }

  }

  //-------------- Function to remove the booking from the database
  const handleRemoveBoooking = async (id) => {

    //First we remove from the array
    const newBookings = bookingPlaces.filter(item => item._id !== id);
    setBookingPlaces(newBookings);

    /* //---------- Filter out the notification where match the id of bookingPlace
    
     console.log('id is removing ',id);
     console.log('booking place details where id is match ',bookingPlaces.filter(item => item._id === id));
 
     console.log('check details of the notifications ',notifications); */

     dispatch(removeBooking(id));

    //----- Call the api to remove this booked place
    try {

      const res = await fetch(`${process.env.REACT_APP_API}book/removeBooked/${id}`, {
        method: 'DELETE',
        headers: {
          'auth-token': Token
        }
      })
      const data = await res.json();
      // console.log('data ', data);

      if (data.success === true)
        toast.success(data.msg);
      else if (data.success === false)
        toast.error(data.msg);

    } catch (error) {
      // console.log(error);
      toast.error(error);
    }
  }

  if (!bookingPlaces)
    return <MainLoader />

  return (
    <>
      <section id="Checkout" style={{ minHeight: "80vh" }}>
        <div className="container mx-auto my-3">

          <div className="flex md:flex-row items-center justify-between flex-col">

            {/* Destination card to give info about the place, what they book  */}
            <div className="p-3 sm:w-full">
              {
                bookingPlaces?.length === 0 && <>
                  <h1 className="text-center text-highlight text-lg my-2 mx-auto ">No booking details is here to show you, book Now!</h1>
                  <Link to="/"> <button className='text-xl w-1/2 my-5 px-4  py-2 rounded-md btn-primary block mx-auto focus:outline-none '>Go Home</button></Link>
                </>
              }
              {
                bookingPlaces && bookingPlaces.map((item) => (

                  <DestinationCard key={item._id} imageSrc={item.place_id?.picture?.url} title={item.name} capacity={23} price={item.place_id?.price} city={item.city} start_date={item.start_date} end_date={item.end_date} start_time={item.start_time} end_time={item.end_time} id={item._id} handleRemoveBooking={handleRemoveBoooking} status={item.status} />
                ))
              }
            </div>

            {/* Checkout details to ensuring the billings  */}
            <div className=" mx-3 md:mx-0">{user &&
              <CheckoutCard name={user.name} address={user.address} handleCheckout={handleCheckout} status={status} />}</div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Checkout
