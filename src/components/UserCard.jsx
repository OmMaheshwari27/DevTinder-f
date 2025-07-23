import React from 'react'
import testImage from '../assets/test.jpg';

<img src={testImage} alt="test" />

const UserCard = ({user}) => {
    console.log(user);
    const {firstName, lastName,age,gender, skills, about,photoUrl}=user;
    //console.log(about);

    //console.log(age);
    //console.log(gender);
    //console.log(skills);
    //console.log(photoUrl);
    
    
  return (
    <div className="card  bg-accent w-96 shadow-sm">
  <figure>
    <img
      src={testImage}
      alt="photo" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{firstName+" "+lastName}</h2>
    {age && gender && <p>{age+" "+gender}</p>}
    <p>{about}</p>
    <div className="card-actions justify-center">
      <button className="btn btn-primary">Send Request</button>
      <button className="btn btn-primary">Ignore</button>
    </div>
  </div>
</div>
  )
}

export default UserCard;
