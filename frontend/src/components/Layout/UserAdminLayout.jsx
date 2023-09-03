import React from 'react'

const UserAdminLayout = ({children}) => {
  return ( 
    <>
       <section id="useradminlayout" style={{minHeight:"80vh"}}>
                <div className="container mx-auto my-2">

                    {/* Navbar section of admin to show the navigation only on admin pages  */}

                                    
                    
                    <hr />

                    {/* Section of the tables to showing all the stuffs of Admin related to the page  */}
                    {children}
                </div>
            </section>
    </>
  )
}

export default UserAdminLayout
