import React, { useEffect, useState } from 'react';

import { Link, useNavigate } from 'react-router-dom'

import { toast } from 'react-toastify'

//Component Stuff
import Loading from '../components/Layout/Loaders/Loading'
import { DayToValidate, getWithExpiry, setWithExpiry, Token } from '../GloballyFunctions';


const Login = () => {

    const navigate = useNavigate();

    //---------------- State Specific Stuff ----------X
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        email: "",
        password: ''
    }); //handle login credentials

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    // You can handle form submission here, such as sending data to the server
    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        //------------- Validating the email of the users
        if (/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(formData.email) === false) {
            toast.error(`${formData.email} is not valid email`)
            setFormData({ email: "", password: '' })
            setLoading(false);
            return;
        }


        try { //Call the api to start to login the users 
            const res = await fetch(`${process.env.REACT_APP_API}user/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await res.json();

            //------------- Localstorage to set credentials ---------X

            // localStorage.setItem('token',data.token);
            setWithExpiry('token', data.token, DayToValidate);

            if (data.success === true) {
                toast.success(`${data.msg}`);
            }

            else if (data.success === false) {
                toast.error(`${data.msg}`);
                setLoading(false);
                setFormData({ email: formData.email, password: '' })
                return;
            }

        } catch (error) {
            // console.log(error);
            setFormData({ email: formData.email, password: '' })
            setLoading(false);
            toast.error(`${error}`);
            return;
        }

        navigate(-1);
        setLoading(false);
        setFormData({ email: '', password: '' })
    };

    if (Token)
        return null;


    return (
        <>

            <div className="mx-auto p-4 bg-slate-100 " style={{ minHeight: "75vh" }}>
                {/* <h1 className="text-2xl font-semibold mb-4">Login</h1> */}
                <form onSubmit={handleSubmit} className="max-w-md mx-auto">

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700">Email <span className="text-highlight">*</span></label>
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
                        <label htmlFor="password" className="block text-gray-700">Password <span className="text-highlight">*</span></label>
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

                            className="w-full py-2 btn-primary focus:outline-none "
                        >
                            <Loading />
                        </button>
                            :
                            <button

                                className="w-full py-2 btn-primary focus:outline-none "
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
