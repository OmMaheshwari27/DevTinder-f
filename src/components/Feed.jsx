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
    feed && feed.length > 0 && (
      <div className='flex justify-center'>
        <UserCard user={feed[0]} />
      </div>
    )
  );
};

export default Feed;