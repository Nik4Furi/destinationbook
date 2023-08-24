// Register.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'

import { toast } from 'react-toastify'


import { useDispatch, useSelector } from 'react-redux'

import { registerUsers } from '../Store/UsersSlice'
import Navbar from '../components/Layout/Navbar';
import Loading from '../components/Loading';

const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const users = useSelector(state => state.users);

    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        cpassword: '',
        address: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // You can handle form submission here, such as sending data to the server
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        // console.log(formData);
        try {

            if (formData.password !== formData.cpassword) {
                toast.error("Password and confirm password didn't match")

                setFormData({ name: formData.name, email: formData.email, phone: formData.phone, address: formData.address, password: '', cpassword: '' })

                return;
            }

            if(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(formData.email) === false){
                toast.error("Password and confirm password didn't match")

                setFormData({ name: formData.name, email: "", phone: formData.phone, address: formData.address, password: '', cpassword: '' })

                return;
            }

            if (/^\d{10}$/.test(formData.phone) === false) {
                toast.error("Please provide a valid phone no.")

                setFormData({ name: formData.name, email: formData.email, phone: '', address: formData.address, password: '', cpassword: '' })

                return;
            }


            if (formData.phone < 0) {
                toast.error("Phone mustn't less than 0")

                setFormData({ name: formData.name, email: formData.email, phone: '', address: formData.address, password: '', cpassword: '' })

                return;
            }

            await dispatch(registerUsers(formData));

            // console.log('check users ',users);
            // toast.success('You are register successfully');

            navigate('/login');

            if(users.status === "success"){
                toast.success(`${users.msg}`);
                return;
            }
            else if(users.status === 'error'){
                toast.error(`${users.msg}`);
                return;
            }

            // toast.success('You are register successfully');

            // navigate('/login')
            // console.log('check users state ', users);

        } catch (error) {
            console.log(error);
            toast.error(`${error}`);
        }

        setLoading(false);
        setFormData({name:'',email:'',phone:'',address:'',password:'',cpassword:''})
    };

    return (
        <>
            {/* Navbar Component  */}
            <Navbar />
            <div className="mx-auto p-4 bg-slate-100">
                {/* <h1 className="text-2xl font-semibold mb-4">Register</h1> */}
                <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700">Name</label>
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
                        <label htmlFor="email" className="block text-gray-700">Email</label>
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
                        <label htmlFor="phone" className="block text-gray-700">Phone</label>
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
                        <label htmlFor="password" className="block text-gray-700">Password</label>
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
                        <label htmlFor="cpassword" className="block text-gray-700">Confirm Password</label>
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

                            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                        >
                            <Loading />
                        </button>
                            :
                            <button

                                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                            >
                                Register
                            </button>}
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
