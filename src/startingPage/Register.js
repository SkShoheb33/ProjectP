import React from 'react'
import './style.css'
import { NavLink } from 'react-router-dom'
function Register() {
  return (
    <React.Fragment>
        <div className='bg-white w-1/3 p-8 rounded-lg'>
            <div className='flex justify-center my-2 font-semibold'>
              <NavLink to='../login'>
                <div className=' px-2 py-1 rounded-md cursor-pointer'>Login</div> 
              </NavLink>
              <div className='mx-2'>|</div>
              <NavLink to='../register'>
                <div className='px-2 py-1 rounded-md cursor-pointer'>Signup</div>
              </NavLink>
            </div>
            <div>
              <input type='text' placeholder='Enter user name' className='border p-1 w-full my-2'/>
            </div>
            <div>
              <input type='email' placeholder='Enter email' className='border p-1 w-full my-2'/>
            </div>
            <div>
              <input type='password' placeholder='Enter password' className='border p-1 w-full my-2'/>
            </div>
            <div>
              <input type='password' placeholder='Enter password' className='border p-1 w-full my-2'/>
            </div>
            <div className='text-center bg-blue-600 text-white p-1 rounded-lg mt-6 cursor-pointer'>
              Signup
            </div>
        </div>
    </React.Fragment>
  )
}

export default Register