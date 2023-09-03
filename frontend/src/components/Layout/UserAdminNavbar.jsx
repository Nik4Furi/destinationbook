import React from 'react'

import { Link } from 'react-router-dom'

const UserAdminNavbar = ({ name, tabs }) => {
    return (
        <>
            {/* Here we include the name of the Admin  */}
            <div className="flex items-center justify-evenly">
                <h2 className="text-xl font-bold">Welcome <span className="text-red-300 text-2xl">{name}</span></h2>

                <div>
                    {
                        tabs.map((item) => (
                            <Link key={item[0]} to={item[1]}> <span className="mx-2 text-blue-400"> {item[0]}</span></Link>
                        ))
                    }
                    <Link to="/logout"> <span className="mx-2 text-blue-400"> Logout</span></Link>

                </div>

            </div>

        </>
    )
}

export default UserAdminNavbar
