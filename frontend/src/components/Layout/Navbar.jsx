import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import NotificationIcon from './NotificationIcon';

import user from '../../assets/user.png'


const Navbar = () => {
    

    const users = useSelector(state => state.users);
    console.log('state of users ', users);

    return (
        <>
            <nav className="bg-gradient-to-r from-blue-700 to-purple-900 p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <Link to={"/"}> <h2 className="text-white text-xl font-semibold">DestinationBook</h2></Link>
                    <ul className="flex space-x-2 mx-auto my-auto">
                        <li className="text-white font-semibold hover:text-blue-100">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="text-white  font-semibold hover:text-purple-300">
                            <Link to="/about">About</Link>
                        </li>
                        <li className="text-white  font-semibold hover:text-purple-300">
                            <Link to="/contact">Contact Us</Link>
                        </li>

                    </ul>

                    
                        {
                            users.user ?
                                <div className='flex items-center overflow-hidden'>
                                  {/* <Link to={"/admin"}> <div style={{border:"1px solid white",padding:'2px',borderRadius:"50%"}}> <img src={user} alt="user" style={{width:"50px",padding:'0',margin:'0'}}/></div> </Link>  */}
                                    <NotificationIcon count={0} />
                                </div>
                                :
                                <div>
                                <Link to={"/login"}>    <button className="px-4 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">SignIn</button></Link>
                                </div>
                        }
                </div>
            </nav>

            
        </>
    )
}

export default Navbar
