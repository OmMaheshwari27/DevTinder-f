import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/constant';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';



const Login = () => {
    const [email, setEmail] = useState("anmol2@gmail.com");
    const [password, setPassword] = useState("Anmol@123");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [errormsg, setError] = useState("");
    const [isSignup, setIsSignup] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const res = await axios.post(`${BASE_URL}/login`, {
                email,
                password,
            }, { withCredentials: true });

            dispatch(addUser(res.data));
            return navigate('/');
        } catch (err) {
            console.error(err);
            setError(err.response?.data || "Login failed");
        }
    };

    const handleSignup = async () => {
        try {
            const res = await axios.post(`${BASE_URL}/signup`, {
                email,
                password,
                firstName,
                lastName,
            }, { withCredentials: true });

            dispatch(addUser(res.data.data));
            return navigate('/profile');
        } catch (err) {
            console.error(err);
            setError(err.response?.data || "Signup failed");
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="card card-border bg-base-300 w-96 text-white shadow-xl">
                <div className="card-body">
                    <h2 className="card-title justify-center">{isSignup ? "Sign Up" : "Login"}</h2>

                    {isSignup && (
                        <>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">First Name</legend>
                                <input
                                    type="text"
                                    value={firstName}
                                    className="input"
                                    placeholder="Enter first name"
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                            </fieldset>

                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Last Name</legend>
                                <input
                                    type="text"
                                    value={lastName}
                                    className="input"
                                    placeholder="Enter last name"
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </fieldset>
                        </>
                    )}

                    <fieldset className="fieldset w-full">
                        <legend className="fieldset-legend">Email ID</legend>
                        <input
                            type="email"
                            value={email}
                            className="input"
                            placeholder="Enter your email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </fieldset>

                    <fieldset className="relative w-full">
                        <legend className="text-sm text-white mb-1">Password</legend>
                        <input
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            className="input w-full pr-12 text-white"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                        >
                            {showPassword ? (
                                <EyeSlashIcon className="w-5 h-5" />
                            ) : (
                                <EyeIcon className="w-5 h-5" />
                            )}
                        </button>
                    </fieldset>

                    {errormsg && <p className="text-red-500 text-sm text-center mt-2">{errormsg}</p>}

                    <div className="card-actions flex flex-col items-center mt-4 gap-3">
                        <button
                            className="btn btn-primary w-full"
                            onClick={isSignup ? handleSignup : handleLogin}
                        >
                            {isSignup ? "Sign Up" : "Login"}
                        </button>

                        <button
                            className="text-sm text-blue-300 hover:underline"
                            onClick={() => {
                                setIsSignup(!isSignup);
                                setError("");
                            }}
                        >
                            {isSignup
                                ? "Already have an account? Login"
                                : "New here? Create an account"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;