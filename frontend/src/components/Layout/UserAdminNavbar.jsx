import React,{useState} from 'react'

import { Link } from 'react-router-dom'

const UserAdminNavbar = ({ name, tabs }) => {
    
    let splitName = name.split(' ');

     //------- Create a hamberger to toggle navbar components
     const [menuOpen, setMenuOpen] = useState(false);

     const toggleMenu = () => {
         setMenuOpen(!menuOpen);
     };

    return (
        <>
            {/* Here we include the name of the Admin  */}
            <div className="flex justify-center md:flex flex-col items-center md:justify-evenly p-2">
                <div className='flex items-center'>
                <h2 className="text-xl mx-5 md:mx-0 text-start font-bold">Welcome <span className="text-red-300 text-2xl">{splitName[0].substr(0,7)}.</span></h2>

                    {/* Hamburger Menu */}
                    <div className="md:hidden cursor-pointer my-3">
                        <button
                            onClick={toggleMenu}
                            className="text-black hover:text-black focus:outline-none"
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

                <div className={`${menuOpen ? 'block' : 'hidden'
                            } md:flex md:items-center md:w-auto`}>
                    {
                        tabs.map((item) => (
                            <Link key={item[0]} to={`${item[1]}`}> <span className="mx-2 text-blue-400"> {item[0]}</span></Link>
                        ))
                    }
                    <Link to="/logout"> <span className="mx-2 text-blue-400"> Logout</span></Link>

                </div>

            </div>

        </>
    )
}

export default UserAdminNavbar
