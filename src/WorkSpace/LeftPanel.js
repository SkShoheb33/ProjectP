import React from 'react'
import './style.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom';
function LeftPanel() {
  
  return (
    <div className='bg-gray-400 h-[92vh] w-full '>
        <div className="flex my-12  rounded-md bg-blue-500 text-white w-3/4 mx-auto py-2 hover:cursor-pointer items-center justify-center">
            Go to Github
        </div>
        <div className='flex flex-col my-12'>
            <NavLink to='projectDetails' className='flex justify-center items-center my-2 hover:bg-gray-500 w-2/3 mx-auto hover:cursor-pointer rounded-md py-2 hover:text-white'>Project Details</NavLink>
            <NavLink to='todos' className='flex justify-center items-center my-2 hover:bg-gray-500 w-2/3 mx-auto hover:cursor-pointer rounded-md py-2 hover:text-white'>To Do List</NavLink>
            <NavLink to='projectRoadmap' className='flex justify-center items-center my-2 hover:bg-gray-500 w-2/3 mx-auto hover:cursor-pointer rounded-md py-2 hover:text-white'>Project Roadmap</NavLink>
            <NavLink to='communication' className='flex  justify-center items-center my-2 hover:bg-gray-500 w-2/3 mx-auto hover:cursor-pointer rounded-md py-2 hover:text-white'>Communicate</NavLink>
        </div>
        <Link to='/' className='flex rounded-md mt-12 bg-gray-500 text-white w-3/4 mx-auto py-2 hover:cursor-pointer items-center justify-center'>
            <FontAwesomeIcon className='mr-2' icon={faArrowLeft} />Exit WorkSpace
        </Link>
    </div>
  )
}

export default LeftPanel