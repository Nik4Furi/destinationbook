import React from 'react'

import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            {/* Here we include the name of the Admin  */}
            <div className="flex items-center justify-evenly">
                <h2 className="text-xl font-bold">Welcome <span className="text-red-300 text-2xl">Admin</span></h2>

                <div>
                    <Link to="/admin"> <span className="mx-2 text-blue-400"> Dashboard</span></Link>
                    <Link to="/admin/places"> <span className="mx-2 text-blue-400"> Places</span></Link>
                    <Link to="/admin/users"> <span className="mx-2 text-blue-400"> Users</span></Link>
                    <Link to="/logout"> <span className="mx-2 text-blue-400"> Logut</span></Link>
          
                </div>

            </div>

        </>
    )
}

export default Navbar
