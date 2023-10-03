import React from 'react'

import StatsCard from '../../components/pages/Admin/StatsCard'

const UserDashboard = () => {
  return (
    <>
      <section id="UserDashboard">

        <div className="container mx-auto my-2">

          <h2 className="text-xl font-bold">Check Your stats of booking places</h2>
          <p className='my-2'>You can check all, the places are booked places, have confirmed the payment, so that you visit this place </p>


          <div className="grid grid-cols-3 gap-2">
             {/* Click on the states to go on booked places, so that check all confrimations  */}
            <StatsCard Stats={"Users"} color={"red"} userCount={34} isProfitable={true} />
            <StatsCard Stats={"Quotes"} color={"purple"} userCount={34} isProfitable={false} />

          </div>

        </div>

      </section>
    </>
  )
}

export default UserDashboard
