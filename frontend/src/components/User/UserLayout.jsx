import React, { useEffect, useState } from 'react'

import { useSelector } from 'react-redux'

import { useNavigate } from 'react-router-dom';

import UserAdminNavbar from '../Layout/UserAdminNavbar';

import Loading from '../Loading'

const UserLayout = ({ children }) => {
//   const navigate = useNavigate();

//   const user = useSelector(state => state.users.user);

  const tabs = [['Dashboard', '/userDashboard'], ['Booked Places', '/user/booked'], ['Notifications', '/notifications']];
//   const [loading, setLoading] = useState(false);


//   useEffect(() => {

//     setLoading(true);

//     if (user.role === 'admin') {
//       navigate('/admin')
//     }

//     setLoading(false);

//   }, [])

  return (
    <>
      {/* {loading && <Loading />} */}
      
      <section id="Sponser" style={{ minHeight: "80vh" }}>
        <div className="container mx-auto my-2">

          {/* Navbar section of admin to show the navigation only on admin pages  */}

          <UserAdminNavbar name={'hello'} tabs={tabs} />

          <hr />

          {/* Section of the tables to showing all the stuffs of Admin related to the page  */}
          {children}
        </div>
      </section>
    </>
  )
}

export default UserLayout
