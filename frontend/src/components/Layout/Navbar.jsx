import React, { useState } from 'react'

import { Link } from 'react-router-dom'

import { useSelector } from 'react-redux'

//Component
import NotificationIcon from './NotificationIcon';

//Images
import user from '../../assets/user.png'

const Navbar = () => {

    const users = useSelector(state => state.users);

    //------- Create a hamberger to toggle navbar components
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            {/* <nav className="bg-gradient-to-r from-blue-700 to-purple-900 p-4"> */}
            {/* <nav className="p-4 bg-img" style={{height:'92px'}}> */}
            <nav className="p-4 bg-black ">
                {/* <nav className="p-4 bg-transparent"> */}
                <div className="container mx-auto md:flex  justify-center md:justify-between  items-center z-50">
                    <div className='flex items-center justify-between'>
                    <Link onClick={() => setMenuOpen(false)} to={"/"}> <h2 className="text-center text-white text-xl font-semibold">OfficeLelo</h2></Link>


                    {/* Hamburger Menu */}
                    <div className="md:hidden cursor-pointer text-center my-3">
                        <button
                            onClick={toggleMenu}
                            className="text-white hover:text-gray-200 focus:outline-none"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                {menuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    ></path>
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    ></path>
                                )}
                            </svg>
                        </button>
                    </div>

                    </div>

                    {/* Menu Items */}
                    <div
                        className={`${menuOpen ? 'block' : 'hidden'
                            } md:flex md:items-center md:w-auto`}
                    >
                        <ul className="flex justify-center md:justify-normal  space-x-3 mx-auto my-2 fs-primary p-2">
                            <li className="text-white font-semibold hover:text-blue-100">
                                {/* <Link to="/">Home</Link> */}
                            </li>
                            <li className="text-white  font-semibold hover:text-purple-300">
                                <Link onClick={() => setMenuOpen(false)} to="/about">About</Link>
                            </li>
                            <li className="text-white  font-semibold hover:text-purple-300">
                                <Link onClick={() => setMenuOpen(false)} to="/">Spaces</Link>
                            </li>
                            <li className="text-white  font-semibold hover:text-purple-300">
                                <Link onClick={() => setMenuOpen(false)} to="/checkout">Checkout</Link>
                            </li>
                            <li className="text-white  font-semibold hover:text-purple-300">
                                <Link onClick={() => setMenuOpen(false)} to="/contact">Contact Us</Link>
                            </li>
                            <li className="text-white  font-semibold hover:text-purple-300">
                                <a onClick={() => setMenuOpen(false)} href="tel:+91 2903892090">+91 2903892090</a>
                            </li>

                        </ul>


                        {
                            users.user ?
                                <div className='relative flex justify-center mx-auto items-center overflow-hidden my-2'>
                                    <Link to={"/checkDashboard"}>
                                        <div onClick={()=>setMenuOpen(false)} className='mx-4' style={{ border: "1px solid white", padding: '2px', borderRadius: "50%" }}> <img src={user} alt="user" style={{ width: "30px", padding: '0', margin: '0' }} /></div></Link>
                                    <NotificationIcon count={0} />
                                </div>
                                :
                                <div>
                                    <Link to={"/login"} onClick={()=>setMenuOpen(false)}>  <button className="px-4 block mx-auto py-2 my-2 rounded-md btn-primary focus:outline-none ">SignIn</button></Link>
                                    {/* <Link to={"/login"}>    <button className="px-4 btn-secondary py-2 rounded-md focus:outline-none">SignIn</button></Link> */}
                                    {/* <Link to={"/login"}>    <button className="px-4 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">SignIn</button></Link> */}
                                </div>
                        }
                    </div>
                </div>
            </nav>


        </>
    )
}

export default Navbar
