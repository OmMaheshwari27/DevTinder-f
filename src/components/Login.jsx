import axios from 'axios';
import React, { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState("anmol2@gmail.com");
    const [password, setPassword] = useState("Anmol@123");
    const handleLogin=async ()=>{
        try{
            const res=await axios.post("http://localhost:3001/login",{
                email,
                password,
            },
            {withCredentials:true},
        );
            console.log("Login successful:", res);
        }
        catch(err){
            console.log(err);
        }
    };
    return (
        <div className='flex justify-center'>
            <div className="card card-border bg-base-300 w-96 text-white"> {/* Added text-white */}
                <div className="card-body">
                    <h2 className="card-title justify-center">Login</h2>
                    <div>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Email ID</legend>
                            <input
                                type="text"
                                value={email} // <-- CORRECTED: Bind to the 'email' state
                                className="input"
                                placeholder="Type your email" // More specific placeholder
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Password</legend>
                            <input
                                type="password" // <-- RECOMMENDED: Change type to 'password' for security
                                value={password} // <-- CORRECTED: Bind to the 'password' state
                                className="input"
                                placeholder="Type your password" // More specific placeholder
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </fieldset>
                    </div>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary" onClick={handleLogin}>Login</button> {/* Changed to Login button */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
