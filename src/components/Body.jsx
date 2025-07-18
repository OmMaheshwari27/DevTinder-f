import { Outlet } from 'react-router-dom'
import Nav_Bar from './Nav_Bar'
import Footer from './Footer'
const Body = () => {
  return (
    <>
      <Nav_Bar/>   
      <Outlet/>
      <Footer/>
      </>
  )
}

export default Body
