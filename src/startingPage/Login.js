import React, { useState } from 'react'
import {useAuth} from '../utils/auth'
import {  Link, NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import './style.css'
function Login() {
  const [userName,setUserName] = useState(null);
  const [password,setPassword] = useState(null);
  const auth = useAuth();
  const navigate = useNavigate();
  let login =()=>{
    auth.login(userName);
    navigate('/',{replace:true})
  }
  return (
    <React.Fragment>
        <div className='bg-white w-1/3 p-8 rounded-lg'>
            <div className='flex justify-center my-2 font-semibold'>
              <NavLink to='../login'>
                <div className='px-2 py-1 rounded-md cursor-pointer'>Login</div> 
              </NavLink>
              <div className='mx-2'>|</div>
              <NavLink to='../register'>
                <div className='px-2 py-1 rounded-md cursor-pointer'>Signup</div>
              </NavLink>
            </div>
            <div>
              <input onChange={(e)=>setUserName(e.target.value)} type='text' value={userName} placeholder='Enter user name' className='border p-1 w-full my-2'/>
            </div>
            <div>
              <input onChange={(e)=>setPassword(e.target.value)} type='password' value={password} placeholder='Enter password' className='border p-1 w-full my-2'/>
            </div>

            <Link to='../../'>
              <div onClick={login} className='text-center bg-blue-600 text-white p-1 rounded-lg mt-6 cursor-pointer'>
                Login
              </div>
            </Link>
        </div>
    </React.Fragment>
  )
}

export default Login