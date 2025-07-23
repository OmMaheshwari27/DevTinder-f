import React, { useState } from 'react'
import UserCard from './UserCard';
import { BASE_URL } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import axios from 'axios';

const EditProfile = ({user}) => {
    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const [photoUrl, setphotoUrl] = useState(user.photoUrl);
    const [age, setAge] = useState(user.age);
    const [gender, setGender] = useState(user.gender);
    const [about, setAbout] = useState(user.about);
const [errormsg, setError] = useState("");
const dispatch=useDispatch();


    const updateProfile=async ()=>{
        setError("");
        try{
            const res=await axios.patch(BASE_URL+"/profile/edit",
               { firstName,
                lastName,
                gender,
                age,
                about,
                photoUrl}, 
                {
                    withCredentials:true,
                }
            )
            dispatch(addUser(res?.data?.data));
        }
        catch(err){
            console.log(err);
            setError(err.response?.data);
        }
    }
    return (
        <div className='flex justify-center'>
            <UserCard user={{firstName,lastName,age,about,gender,photoUrl}}/>
        <div className='flex justify-center mx-10'>
            <div className="card card-border bg-base-300 w-96 text-white">
                <div className="card-body">
                    <h2 className="card-title justify-center">Edit Profile</h2>
                    <div>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">First Name</legend>
                            <input
                                type="text"
                                value={firstName}
                                className="input"
                                placeholder="Type your firstName"
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">last Name</legend>
                            <input
                                type="text"
                                value={lastName}
                                className="input"
                                placeholder="Type your lastName"
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Age</legend>
                            <input
                                type="number"
                                value={age}
                                className="input"
                                placeholder="Type your age"
                                onChange={(e) => setAge(e.target.value)}
                            />
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">gender</legend>
                            <input
                                type="text"
                                value={gender}
                                className="input"
                                placeholder="gender"
                                onChange={(e) => setGender(e.target.value)}
                            />
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">About</legend>
                            <input
                                type="text"
                                value={about}
                                className="input"
                                placeholder="tell us about yourself"
                                onChange={(e) => setAbout(e.target.value)}
                            />
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">photoUrl</legend>
                            <input
                                type="text"
                                value={photoUrl}
                                className="input"
                                placeholder="tell us about yourself"
                                onChange={(e) => setphotoUrl(e.target.value)}
                            />
                        </fieldset>
                    </div>
                    <p className='text-red-500'>{errormsg} </p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary" onClick={updateProfile}>update profile</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default EditProfile
