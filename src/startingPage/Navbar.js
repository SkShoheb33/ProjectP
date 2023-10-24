import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <React.Fragment>
        <div className='flex flex-row justify-between p-3 w-full fixed z-10 text-white'>
            <div className='font-thin text-xl'>
                Project <span className='font-semibold'>P</span>
            </div>
            <Link to='login'>
              <div className='bg-blue-600 rounded-md px-3 py-1 text-lg hover:cursor-pointer'>
                  Login
              </div>
            </Link>
        
        </div>
    </React.Fragment>
  )
}

export default Navbar