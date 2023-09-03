import React, { useEffect } from 'react'
import DestinationCard from '../components/Checkout/DestinationCard'
import CheckoutCard from '../components/Checkout/CheckoutCard'

import dest from '../assets/dest-1.jpg'
import { useSelector } from 'react-redux'

const Checkout = () => {
  const places = useSelector(state => state.places.places);
  const booking = useSelector(state => state.booking);

  console.log('length of booking ',booking.length,places.length)
  //-------------- Find the places which is booked by the users
  useEffect(()=>{
  },[])

  return (
    <>
      <section id="Checkout" style={{minHeight:"80vh"}}>
        <div className="container mx-auto my-3">

            <div className="grid grid-cols-4 gap-2">

            {/* Destination card to give info about the place, what they book  */}
            <div className="col-span-3">
            <DestinationCard imageSrc={dest} title={"Palace On Wheels to move"} capacity={23} price={29292} location={'Peris'} start_date={"4-August-2023"} end_date={"8-August-2023"} />
            </div>

            {/* Checkout details to ensuring the billings  */}
            <div className="col-span-1">
            <CheckoutCard name={"user-name"} address={"0202 wowo new york"} totalPrice={2020202}  /></div>

            </div>
        </div>
      </section>
    </>
  )
}

export default Checkout
