import React from 'react'

import { useSelector } from 'react-redux'


//Components
import UserAdminNavbar from '../../Layout/ProtectedLayout/UserAdminNavbar';

const AdminLayout = ({ children }) => {
  
  const user = useSelector(state => state.users.user);

  const tabs = [['Dashboard', '/admin/'], ['Show Places', '/admin/places'], ['Users', '/admin/users']];


  return (
    <>

        <section id="Admin" style={{ minHeight: "80vh" }}>
          <div className="container mx-auto my-2">
            {/* Navbar section of admin to show the navigation only on admin pages  */}

            <UserAdminNavbar name={user?.name} tabs={tabs} />
            <hr />

            {/* Section of the tables to showing all the stuffs of Admin related to the page  */}
            {children}

          </div>
        </section>

    </>
  )
}

export default AdminLayout
