import React, { useState } from 'react'

import { Link, useLocation } from 'react-router-dom'

import { useSelector } from 'react-redux'

//Component
import NotificationIcon from '../../Layout/NotificationIcon';
import ContactCard from './ContactCard';


//Images
import user from '../../../assets/user.png'
import Button from '../../Layout/Form/Button';

const TransHeader = () => {
    const location = useLocation();
    // console.log('location  pathname ', location.pathname);

    const users = useSelector(state => state.users);

    //------- Create a hamberger to toggle navbar components
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <section id='TransHeader' className='  min-h-screen' >

                {/* First section to showing the trasnparent navbar  */}
                <div>
                    <nav className="p-10 mb-3 ">
                        {/* <nav className="p-4 bg-transparent"> */}
                        <div className="container mx-auto md:flex  justify-center md:justify-between  items-center z-50">
                            <div className='flex items-center justify-between pt-3'>
                                <Link onClick={() => setMenuOpen(false)} to={"/"}> <h2 className="text-center text-white text-xl mt-5 font-semibold">OfficeLelo</h2></Link>


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
                                <ul className="flex justify-center md:justify-normal pt-3 space-x-3 mx-auto mt-5 fs-primary p-2  ">
                                    <li className="text-white font-semibold hover:text-blue-100 text-lg">
                                        {/* <Link to="/">Home</Link> */}
                                    </li>
                                    <li className={`text-white  font-semibold text-lg hover:text-red-300 ${location.pathname === '/about' ? 'active' : ''} `}>
                                        <Link onClick={() => setMenuOpen(false)} to="/about">About</Link>
                                    </li>
                                    <li className="text-white  font-semibold text-lg hover:text-red-300">
                                <Link onClick={() => setMenuOpen(false)} to="/spaces">Spaces</Link>
                            </li>
                                    <li className={`text-white  font-semibold text-lg hover:text-red-300 ${location.pathname === '/checkout' ? 'active' : ''} `}>
                                        <Link onClick={() => setMenuOpen(false)} to="/checkout">Checkout</Link>
                                    </li>
                                    <li className={`text-white  font-semibold text-lg hover:text-red-300 ${location.pathname === '/contact' ? 'active' : ''} `}>
                                        <Link onClick={() => setMenuOpen(false)} to="/contact">Contact Us</Link>
                                    </li>
                                   

                                </ul>


                                {
                                    users.user ?
                                        <div className='relative flex justify-center mx-auto items-center overflow-hidden my-2'>
                                            <Link to={"/checkDashboard"}>
                                                <div onClick={() => setMenuOpen(false)} className='mx-4' style={{ border: "1px solid white", padding: '2px', borderRadius: "50%" }}> <img src={user} alt="user" style={{ width: "30px", padding: '0', margin: '0' }} /></div></Link>
                                            <NotificationIcon count={0} />
                                        </div>
                                        :
                                        <div>
                                            <Link to={"/login"} onClick={() => setMenuOpen(false)}>  <button className="px-6 block mx-auto py-3 my-2 rounded-lg cursor-pointer btn-primary focus:outline-none ">Sign In</button></Link>
                                            {/* <Link to={"/login"} onClick={() => setMenuOpen(false)}>  <button className="px-6 block mx-auto py-3 my-2 rounded-lg cursor-pointer bg-red-600 hover:bg-red-800 focus:outline-none ">Sign In</button></Link> */}
                                            {/* <Link to={"/login"}>    <button className="px-4 btn-secondary py-2 rounded-md focus:outline-none">SignIn</button></Link> */}
                                            {/* <Link to={"/login"}>    <button className="px-4 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">SignIn</button></Link> */}
                                        </div>
                                }
                                 <li className="text-white font-semibold absolute top-0 text-lg mb-3 right-1 list-none">
                                        <a onClick={() => setMenuOpen(false)} href="tel:+91 2903892090"><Button title={'Call Now'} btntype='secondary' /></a>
                                        {/* <a onClick={() => setMenuOpen(false)} href="tel:+91 2903892090"><button className="btn-secondary"></button></a> */}
                                    </li>
                            </div>
                        </div>
                    </nav>
                </div>

                {/* Next section: have two sides  */}
                <div className="flex items-center w-full justify-center">

                    <div className="container flex-col md:flex-row mx-auto my-2 flex items-center justify-between mt-3">

                        {/* Left side: show the information what we provide  */}
                        <div id="left" className="p-5 w-1/2 sm:w-full" >
                            <h1 className="text-4xl "><span className=" ">officelelo</span> : Book Your Space 🚀</h1>
                            <p className="text-lg my-2"><span className="">officelelo</span> is platform where you can book a place, for <span className=" ">Virtual Office</span> , <span className=" ">Tour</span>, <span className=" ">Meeting</span>, and <span className=" ">Conference</span> See the procedure, how work <a href="#HowBookPlace" className='text-slate-500'>👉 HERE</a></p>
                            <p className="text-md my-2">We are provide a better place reserving facility help to make your thing/work is done as early as possible, with better services</p>

                            <p className="text-white font-bold text-2xl">"Time to act, no need for a bow, secure your spot, don't ask how👇"</p>
                            {/* <p className=" text-2xl " style={{color:'salmon'}}>Time to act, no need for a bow, secure your spot, don't ask how—Book Now!</p> */}

                            {/* <a href="#Explore"><button className="btn-primary my-2"></button></a> */}
                            <a href="#Explore"><Button title={'Book Now!'} /></a>
                        </div>

                        {/* Right side: show the form for contact us  */}
                        <div id="right" className='w-1/2 sm:w-full' >
                            <ContactCard />
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default TransHeader
