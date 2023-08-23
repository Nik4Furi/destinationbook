import React from 'react'
import Navbar from './Navbar'

const AdminLayout = ({children}) => {
  return (
    <>
       <section id="Admin" style={{minHeight:"80vh"}}>
                <div className="container mx-auto my-2">

                    {/* Navbar section of admin to show the navigation only on admin pages  */}

                    <Navbar />                  
                    
                    <hr />

                    {/* Section of the tables to showing all the stuffs of Admin related to the page  */}
                    {children}
                </div>
            </section>
    </>
  )
}

export default AdminLayout
