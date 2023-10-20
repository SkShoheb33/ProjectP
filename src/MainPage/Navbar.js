import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faUser,faBell } from '@fortawesome/free-solid-svg-icons'

function Navbar(props) {
  return (
    <div className='bg-gray-800 w-full h-[8vh] text-white flex items-center justify-between p-3 '>
        <div className='font-thin text-xl'>
            Project <span className='font-semibold'>P</span>
        </div>
        <div className='w-1/3'>
            <input className='w-full p-1 bg-transparent border-b' type='search' placeholder='Search for a project'/>
        </div>
        <div className='flex w-1/6 justify-around items-center'>
            <div className='w-1/3 text-lg'>
                <FontAwesomeIcon icon={faBell} />
            </div>
            <div className='flex w-2/3 justify-around items-center'>
                <div className='text-normal text-lg'>User name</div>
                <div onClick={props.goToProfile} className='text-normal text-2xl'>
                    <FontAwesomeIcon icon={faUser} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar