// Login.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'

import Loading from '../components/Loading'

import { toast } from 'react-toastify'

const Login = () => {
    const navigate = useNavigate();


    // console.log('check users details ',users, users.email);
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        email: "",
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // You can handle form submission here, such as sending data to the server
    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        if (/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(formData.email) === false) {
            toast.error(`${formData.email} is not valid email`)
            setFormData({ email: "", password: '' })
            setLoading(false);
            return;
        }
        try {

            const res = await fetch(`${process.env.REACT_APP_API}user/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await res.json();

            // console.log('check actuall data is ', data);

            //Set the localstorage with token
            localStorage.setItem('token',data.token);
           
            if (data.success === true) {
                toast.success(`${data.msg}`);
                navigate(-1);
            }
            else if (data.success === false) {
                toast.error(`${data.msg}`);
                setLoading(false);
                setFormData({ email: formData.email, password: '' })
                return;
            }

        } catch (error) {
            console.log(error);
            setFormData({ email: formData.email, password: '' })

            toast.error(`${error.message}`);
        }
navigate(-1);
        setLoading(false);
        setFormData({ email: '', password: '' })
    };

    return (
        <>
        
        <div className="mx-auto p-4 bg-slate-100 " style={{ minHeight: "75vh" }}>
            {/* <h1 className="text-2xl font-semibold mb-4">Login</h1> */}
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">

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
                    {loading ? <button

                        className="w-full py-2 rounded-md btn-primary focus:outline-none "
                    >
                        <Loading />
                    </button>
                        :
                        <button

                            className="w-full py-2 rounded-md btn-primary focus:outline-none "
                        >
                            Login
                        </button>}
                </div>
                <div className="mb-4">
                    <Link to="/register" className=' font-bold text-blue-600'><span className=''></span>Create a new account</Link>
                </div>
            </form>
        </div>

        </>
    );
};

export default Login;
