import React, { useState,useEffect } from 'react';

import { Link, useNavigate } from 'react-router-dom'

import { toast } from 'react-toastify'

// Global Functions Stuff
import { Token } from '../GloballyFunctions';

//Component Stuff
import Loading from '../components/Layout/Loaders/Loading';
import Button from '../components/Layout/Form/Button';

const Register = () => {

    const navigate = useNavigate();
    
    //---------------- State Specific Stuff -----------------X
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        cpassword: '',
        address: '',
    });

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    // ----------- Function to register the users-----------X
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (formData.password !== formData.cpassword) {
            toast.error("Password and confirm password didn't match")
            setFormData({ ...formData, password: '', cpassword: '' })
            setLoading(false);
            return;
        }

        if (/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(formData.email) === false) {
            toast.error(`${formData.email} is not valid email`);
            setFormData({ ...formData, email: '' });
            setLoading(false);
            return;
        }

        if (/^\d{10}$/.test(formData.phone) === false || (formData.phone).length < 0 || Number(formData.phone) < 0) {
            toast.error("Please provide a valid phone no.")
            setFormData({ ...formData, phone: '' })
            setLoading(false);
            return;
        }

        try { //Call the api to try register the user
            const res = await fetch(`${process.env.REACT_APP_API}user/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await res.json();

            if (data.success === true) {
                toast.success(`${data.msg}`);
                navigate('/login');
            }
            else if (data.success === false) {
                toast.error(`${data.msg}`);
            }

        } catch (error) {
            // console.log(error);
            toast.error(error);
            setLoading(false);
            setFormData({ ...formData, password: '', cpassword: '' })
            return;
        }

        setLoading(false);
        setFormData({ name: '', email: '', phone: '', address: '', password: '', cpassword: '' })
    };

    if (Token)
         return null;

    return (
        <>
            <div className="mx-auto p-4 bg-slate-100">
                {/* <h1 className="text-2xl font-semibold mb-4">Register</h1> */}
                <form onSubmit={handleSubmit} className="max-w-md mx-auto">

                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700">Name <span className='text-red-500'>*</span></label>
                        <input
                            type="text"
                            id="name" 
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            required
                            minLength={5}
                            maxLength={250}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700">Email <span className='text-red-500'>*</span></label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            required
                            minLength={7}
                            maxLength={450}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="phone" className="block text-gray-700">Phone <span className='text-red-500'>*</span></label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            required
                            minLength={10}
                            maxLength={10}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700">Password <span className='text-red-500'>*</span></label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            required
                            minLength={8}
                            maxLength={450}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="cpassword" className="block text-gray-700">Confirm Password <span className='text-red-500'>*</span></label>
                        <input
                            type="password"
                            id="cpassword"
                            name="cpassword"
                            value={formData.cpassword}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            required
                            minLength={8}
                            maxLength={450}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="address" className="block text-gray-700">Address</label>
                        <textarea
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            minLength={10}
                            maxLength={1000}
                        ></textarea>
                    </div>

                    <div className="mb-4">
                        {loading ? <button

                            className="w-full   py-2 rounded-md btn-primary focus:outline-none "
                        >
                            <Loading />
                        </button>
                            :
                            <div

                                className="w-full"
                            >
                                <Button title={'Register'} />
                            </div>}
                    </div>

                    <div className="mb-4">
                        <Link to="/login" className=' font-bold text-blue-600'><span className=''></span>Already have an account</Link>
                    </div>

                </form>
            </div>

        </>
    );
};

export default Register;
