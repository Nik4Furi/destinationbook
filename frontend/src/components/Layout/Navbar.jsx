import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className="bg-gradient-to-r from-purple-500 to-blue-500 p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="text-white text-xl font-semibold">My Website</div>
                    <ul className="flex space-x-4">
                        <li className="text-white hover:text-blue-100">
                            <a href="/">Home</a>
                        </li>
                        <li className="text-white hover:text-purple-300">
                            <a href="/explore">Explore</a>
                        </li>
                        <li className="text-white hover:text-purple-300">
                            <a href="/about">About</a>
                        </li>
                        <li className="text-white hover:text-purple-300">
                            <Link to="/contact">Contact Us</Link>
                        </li>
                        <li>
                            {/* <button className="bg-purple-800':'bg-gradient-to-r from-blue-500 to-purple-500">SignIn</button> */}
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
