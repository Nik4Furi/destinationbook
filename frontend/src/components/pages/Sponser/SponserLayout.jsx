import React from 'react'

import { useSelector } from 'react-redux'

import UserAdminNavbar from '../../Layout/ProtectedLayout/UserAdminNavbar';

const SponserLayout = ({ children }) => {

  const user = useSelector(state => state.users.user);

  const tabs = [['Dashboard', '/sponser/'], ['Add Place', '/sponser/addplace'],['Show Places', '/sponser/showplaces'], ['Notifications', '/notifications']];


  return (
    <>
      
      <section id="Sponser" style={{ minHeight: "80vh" }}>
        <div className="container mx-auto my-2">

          {/* Navbar section of admin to show the navigation only on admin pages  */}

          <UserAdminNavbar name={user?.name} tabs={tabs} />

          <hr />

          {/* Section of the tables to showing all the stuffs of Admin related to the page  */}
          <div className="p-3">
          {children}
          </div>
        </div>
      </section>
    </>
  )
}

export default SponserLayout
