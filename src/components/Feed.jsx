import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFeed } from '../utils/feedSlice';
import UserCard from './UserCard';
import { BASE_URL } from '../utils/constant';


const Feed = () => {


  const dispatch = useDispatch();
  const feed = useSelector((store) => store.feed);

  useEffect(() => {
    const getFeed = async () => {
      if (feed && feed.length > 0) return;
      try {
        const res = await axios.get(`${BASE_URL}/feed`, {
          withCredentials: true,
        });
        //console.log("Fetched feed:", res?.data);
        dispatch(addFeed(res?.data));
      } catch (err) {
        console.log("Error fetching feed:", err);
      }
    };

    getFeed();
  }, [dispatch, feed]);

  return (
    <div className="flex justify-center items-center h-full">
      {feed && feed.length > 0 ? (
        <UserCard user={feed[0]} />
      ) : (
        <p className="text-xl font-semibold text-white-600 my-20">No more user found right now</p>
      )}
    </div>
  );
};

export default Feed;