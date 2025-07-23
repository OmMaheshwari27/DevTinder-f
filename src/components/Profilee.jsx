import React from 'react'
import EditProfile from './EditProfile'
import { useSelector } from 'react-redux'
const Profilee = () => {
    const user=useSelector((store)=>store.user);
  return user && (
    <div>
      <EditProfile user={user}/>
    </div>
  )
}

export default Profilee
