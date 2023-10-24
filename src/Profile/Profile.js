import React from 'react'
import './style.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { useAuth } from '../utils/auth'
import { useNavigate } from 'react-router-dom'
function Profile(props) {
    const auth = useAuth();
    const navigate = useNavigate();
    const logout = ()=>{
        auth.logout();
        navigate('/home');
    }
  return (
    <div className='flex flex-col w-full p-3'>
        <div className='flex  w-1/2  justify-start '>
            <div className='text-normal text-2xl w-2/3 text-left'>
                Click to logout
            </div>
            <div onClick={logout} className='bg-blue-500 text-white rounded-md px-8 py-1 hover:cursor-pointer'>
                logout
            </div>
        </div>
        <div className='flex items-center  w-1/4 justify-around my-12'>
            <div className='rounded-full ' id='profile-pic'></div>
            <div className='hover:cursor-pointer hover:bg-gray-200 aspect-square rounded-full w-[40px] h-[40px] flex justify-center items-center'><FontAwesomeIcon icon={faPenToSquare} /></div>
        </div>
        <div className='flex flex-col items-start'>
            <div className='flex font-semibold items-center'>
                Personal info
                <div className='hover:cursor-pointer hover:bg-gray-200 aspect-square rounded-full w-[40px] h-[40px] flex justify-center items-center'><FontAwesomeIcon icon={faPenToSquare} /></div>
            </div>
            <div className='flex flex-col w-1/4 '>
                <input type='text' value={props.userData.userName} readOnly className='my-2 border-b w-full text-start'/>
                <input type='text' value={props.userData.password} readOnly className='my-2 border-b w-full text-start'/>
                <input type='text' value={props.userData.email} readOnly className='my-2 border-b w-full text-start'/>
                <input type='text' value={props.userData.discription} readOnly className='my-2 border-b w-full text-start'/>
            </div>
        </div>
    </div>
  )
}

export default Profile