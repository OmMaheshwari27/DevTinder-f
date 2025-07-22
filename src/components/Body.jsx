import { Outlet, useNavigate } from 'react-router-dom';
import Nav_Bar from './Nav_Bar';
import Footer from './Footer';
import axios from 'axios';
import { BASE_URL } from '../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { useEffect } from 'react';

const Body = () => {
    const userData=useSelector((store)=>store.user);
    const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
     if(userData) return;
      try {
        const res = await axios.get(BASE_URL+"/profile/view", {
          withCredentials: true,
        });
        dispatch(addUser(res.data));
      } catch (err) {
        // Check status from response
        if (err.response && err.response.status === 401) {
          navigate('/login');
        } else {
          console.error('Unexpected error:', err);
        }
      }
    };

    fetchUser();
  }, [dispatch, navigate]);

  return (
    <>
      <Nav_Bar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Body;