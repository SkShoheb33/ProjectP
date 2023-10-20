import React from 'react'
import './style.css'
import Navbar from './Navbar'
// import Login from './Login'
import Register from './Register'

// <Login className='hidden'/> 
// <Navbar/>
function Home() {
  return (
    <React.Fragment>
      <Navbar/>
      <div className='bg-image w-full h-[100vh] flex items-center justify-center'>  
        {/* hidding */}
        <div className='hidden text-white flex h-1/2  w-3/4 mx-auto items-center justify-around'>
          <div className='text-7xl font-bold text-right mx-2 w-1/4'>
              Make <br/> Dream <br/> Real
          </div>
          <div className='text-xl text-left mx-2 w-2/3 '>
              Welcome!
              <br/>
              <br/>
              At Project P, we are passionate about fostering creativity, collaboration, and innovation. Our platform is a dynamic space where individuals and teams come together to turn their ideas into reality, and where contributors from diverse backgrounds and expertise join forces to make a difference
          </div>
        </div> 
        <Register/>
      </div>
    </React.Fragment>
  )
}

export default Home