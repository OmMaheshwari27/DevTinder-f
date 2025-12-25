import axios from 'axios';
import React, { useEffect } from 'react';
import { BASE_URL } from '../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { addConnections } from '../utils/connectionSlice';
import { Link } from 'react-router-dom';

const Connections = () => {
  const dispatch = useDispatch();
  const connections = useSelector((store) => store.connections);

  useEffect(() => {
    const fetchConnection = async () => {
      try {
        const res = await axios.get(BASE_URL + "/connections", {
          withCredentials: true,
        });
        //console.log(res.data.data);
        dispatch(addConnections(res.data.data));
      } catch (err) {
        console.error("Failed to fetch connections", err);
      }
    };
    fetchConnection();
  }, [dispatch]);

  if (!connections || connections.length === 0) {
    return (
      <div className='text-center my-10'>
        <h1 className='text-xl font-bold'>No connections found</h1>
      </div>
    );
  }

  return (
    <div className='my-10'>
      <p className='text-center text-bold text-3xl text-white'>Connections</p>
      {connections.map((connection, index) => (
        <div
          key={index}
          className="flex m-4 p-4 rounded-lg bg-base-300 w-1/2 mx-auto"
        >
          <div>
            <img
              alt="profile"
              className="w-20 h-20 rounded-full"
              src={connection.photoUrl || '/default.png'}
            />
          </div>
          <div className="text-left mx-4">
            <h2 className="font-bold text-xl">
              {connection.firstName} {connection.lastName}
            </h2>
            {connection.age && connection.gender && (
              <p>{connection.age}, {connection.gender}</p>
            )}
            <p>{connection.about}</p>
          </div>
            <Link to={"/chat/"+connection._id}>
            <button className=' btn btn-primary'>chat</button>
            </Link>
        </div>
      ))}
    </div>
  );
};

export default Connections;