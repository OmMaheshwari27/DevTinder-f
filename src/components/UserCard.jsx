import React from 'react'
import testImage from '../assets/test.jpg';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { removeUserFromFeed } from '../utils/feedSlice'
import { BASE_URL } from '../utils/constant';

<img src={testImage} alt="test" />

const UserCard = ({ user }) => {
  const dispatch=useDispatch();
  const handleRequest = async (status, _id) => {
    try {
      const res = await axios.post(BASE_URL + "/request/send/" + status + "/" + _id,
        {},
        { withCredentials: true, }
      )
      dispatch(removeUserFromFeed(_id));
    }
    catch (err) {
      console.error("Error sending request:", err);
    }
  }

  console.log(user);
  const { _id, firstName, lastName, age, gender, skills, about, photoUrl } = user;
  return (
    <div className="card  bg-accent w-96 shadow-sm">
      <figure>
        <img
          src={testImage}
          alt="photo" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName + " " + lastName}</h2>
        {age && gender && <p>{age + " " + gender}</p>}
        <p>{about}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-primary"
            onClick={() => handleRequest("interested", _id)} >Send Request</button>
          <button className="btn btn-primary"
            onClick={() => handleRequest("ignored", _id)} >Ignore</button>
        </div>
      </div>
    </div>
  )
}

export default UserCard;
