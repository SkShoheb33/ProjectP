import React from 'react'

function Login() {
  return (
    <React.Fragment>
        <div className='bg-white w-1/3 p-8 rounded-lg'>
            <div className='flex justify-center my-2 font-semibold'>
              <div className='bg-gray-300 px-2 py-1 rounded-md cursor-pointer'>Login</div> 
              <div className='mx-2'>|</div>
              <div className='px-2 py-1 rounded-md cursor-pointer'>Signup</div>
            </div>
            <div>
              <input type='text' placeholder='Enter user name' className='border p-1 w-full my-2'/>
            </div>
            <div>
              <input type='text' placeholder='Enter password' className='border p-1 w-full my-2'/>
            </div>
            <div className='bg-blue-600 text-white p-1 rounded-lg mt-6 cursor-pointer'>
              Login
            </div>
        </div>
    </React.Fragment>
  )
}

export default Login