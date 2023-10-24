import React from 'react'
import './style.css'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

function Home() {
  return (
    <div className='h-[100vh] fixed top-0 w-full '>
      <Navbar/>
      <div className='bg-image w-full h-[100vh] flex items-center justify-center '>  
        <Outlet/>
      </div>
    </div>
  )
}

export default Home