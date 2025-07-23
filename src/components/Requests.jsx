import axios from 'axios';
import React, { useEffect } from 'react';
import { BASE_URL } from '../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { addRequests, removeRequest } from '../utils/requestSlice';

const Requests = () => {
  const dispatch = useDispatch();
  const request = useSelector((store) => store.requests);

  const reviewRequest= async (status,_id)=>{
    try{const res= await axios.post(BASE_URL+"/request/recieved/"+status+"/"+_id,
      {},
      {withCredentials:true,}
    )
    dispatch(removeRequest(_id));
  } 
  catch(err){
    
  }
  }

  useEffect(() => {
    const fetchRequest = async () => {
      try {
        const res = await axios.get(BASE_URL + "/user/requests/recieved", {
          withCredentials: true,
        });
       // console.log(res);
        dispatch(addRequests(res.data.data));
      } catch (err) {
        console.error("Failed to fetch request", err);
      }
    };

    fetchRequest();
  }, [dispatch]);

  if (!request || request.length === 0) {
    return (
      <div className='text-center my-10'>
        <h1 className='text-xl font-bold'>No Request found</h1>
      </div>
    );
  }

  return (
    <div className='  my-10'>
      <p className='text-center text-bold text-3xl text-white'>Pending Requests</p>
      {request.map((req, index) => (
        <div
          key={index}
          className="flex justify-between items-center m-4 p-4 rounded-lg bg-base-300 w-1/2 mx-auto"
        >
          <div>
            <img
              alt="profile"
              className="w-20 h-20 rounded-full"
              src={req.fromUserId.photoUrl || '/default.png'}
            />
          </div>
          <div className="text-left mx-4">
            <h2 className="font-bold text-xl">
              {req.fromUserId.firstName} {req.fromUserId.lastName}
            </h2>
            {req.fromUserId.age && req.fromUserId.gender && (
              <p>{req.fromUserId.age}, {req.fromUserId.gender}</p>
            )}
            <p>{req.fromUserId.about}</p>
          </div>
          <div className="card-actions justify-center">
            <button className="btn btn-primary" 
            onClick={()=>reviewRequest("accepted",req.fromUserId._id)}>Accept</button>
            <button className="btn btn-primary"
            onClick={()=>reviewRequest("rejected",req.fromUserId._id)}>Reject</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Requests;