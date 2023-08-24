import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className="bg-gradient-to-r from-blue-700 to-purple-900 p-4">
                <div className="container mx-auto flex justify-between items-center">
                   <Link to={"/"}> <h2 className="text-white text-xl font-semibold">DestinationBook</h2></Link>
                    <ul className="flex space-x-2 mx-auto my-auto">
                        <li className="text-white font-semibold hover:text-blue-100">
                            <a href="/">Home</a>
                        </li>
                        <li className="text-white  font-semibold hover:text-purple-300">
                            <a href="/about">About</a>
                        </li>
                        <li className="text-white  font-semibold hover:text-purple-300">
                            <Link to="/contact">Contact Us</Link>
                        </li>
                       
                    </ul>

                     <div>
                        <Link to={"/login"}>
                            <button className="px-4 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">SignIn</button></Link>
                            {/* <button className="button">SignIn</button></Link> */}
                        </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
