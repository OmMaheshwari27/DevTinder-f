import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/constant';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [errormsg, setError] = useState("");
    const [isSignup, setIsSignup] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const res = await axios.post(
                `${BASE_URL}/login`,
                { email, password },
                { withCredentials: true }
            );
            dispatch(addUser(res.data));
            navigate('/');
        } catch (err) {
            setError(err.response?.data || "Login failed");
        }
    };

    const handleSignup = async () => {
        try {
            const res = await axios.post(
                `${BASE_URL}/signup`,
                { email, password, firstName, lastName },
                { withCredentials: true }
            );
            dispatch(addUser(res.data.data));
            navigate('/profile');
        } catch (err) {
            setError(err.response?.data || "Signup failed");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#f8fafc] px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 max-w-6xl w-full">

                {/* FORM */}
                <div className="w-full max-w-md bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
                    <h1 className="text-gray-900 text-3xl font-semibold mb-8">
                        {isSignup ? "Create an account" : "Login to your account"}
                    </h1>

                    <div className="space-y-6">

                        {isSignup && (
                            <>
                                <div>
                                    <label className="text-gray-700 text-sm mb-2 block">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        placeholder="Enter first name"
                                        className="w-full bg-gray-100 text-gray-900 px-4 py-3 border border-gray-300 rounded-lg outline-none focus:bg-white focus:border-[#373e40] focus:ring-2 focus:ring-[#373e40]/20 transition"
                                    />
                                </div>

                                <div>
                                    <label className="text-gray-700 text-sm mb-2 block">
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        placeholder="Enter last name"
                                        className="w-full bg-gray-100 text-gray-900 px-4 py-3 border border-gray-300 rounded-lg outline-none focus:bg-white focus:border-[#373e40] focus:ring-2 focus:ring-[#373e40]/20 transition"
                                    />
                                </div>
                            </>
                        )}

                        <div>
                            <label className="text-gray-700 text-sm mb-2 block">
                                Email
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter email"
                                className="w-full bg-gray-100 text-gray-900 px-4 py-3 border border-gray-300 rounded-lg outline-none focus:bg-white focus:border-[#373e40] focus:ring-2 focus:ring-[#373e40]/20 transition"
                            />
                        </div>

                        <div>
                            <label className="text-gray-700 text-sm mb-2 block">
                                Password
                            </label>

                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter password"
                                    className="w-full bg-gray-100 text-gray-900 px-4 py-3 border border-gray-300 rounded-lg outline-none focus:bg-white focus:border-[#373e40] focus:ring-2 focus:ring-[#373e40]/20 transition pr-12"
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                >
                                    {showPassword ? (
                                        <EyeSlashIcon className="w-5 h-5" />
                                    ) : (
                                        <EyeIcon className="w-5 h-5" />
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>

                    {errormsg && (
                        <p className="text-red-500 text-sm mt-4 text-center">
                            {errormsg}
                        </p>
                    )}

                    <button
                        onClick={isSignup ? handleSignup : handleLogin}
                        className="mt-6 w-full py-3 rounded-lg bg-[#373e40] hover:bg-[#2f3537] text-white transition duration-200"
                    >
                        {isSignup ? "Sign Up" : "Login"}
                    </button>

                    <p className="text-sm text-gray-600 mt-6 text-center">
                        {isSignup ? "Already have an account?" : "New here?"}
                        <span
                            onClick={() => {
                                setIsSignup(!isSignup);
                                setError("");
                            }}
                            className="text-[#373e40] font-medium underline cursor-pointer ml-1"
                        >
                            {isSignup ? "Login" : "Create an account"}
                        </span>
                    </p>
                </div>

                {/* IMAGE */}
                <div className="hidden lg:flex justify-center">
                    <img
                        src="https://readymadeui.com/login-image.webp"
                        className="w-full max-w-md object-contain"
                        alt="login"
                    />
                </div>

            </div>
        </div>
    );
};

export default Login;