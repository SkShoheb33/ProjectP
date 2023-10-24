import React from 'react'
import { Link, NavLink } from 'react-router-dom';
function ProfilePanel() {
  return (
    <div className='bg-gray-400 w-full flex flex-col '>
        <Link to='/'><div className='text-center my-5 bg-blue-500 w-2/3 mx-auto text-white py-2 rounded-md hover:cursor-pointer hover:bg-blue-600'>Go to home</div></Link>
        <NavLink to='myProfile'  className="text-center hover:bg-gray-500  w-2/3 my-2 mt-20 p-2 rounded-md hover:text-white hover:cursor-pointer mx-auto">Profile</NavLink>
        <NavLink to='myProjects' className="text-center hover:bg-gray-500 w-2/3 my-2 p-2 rounded-md hover:text-white hover:cursor-pointer mx-auto">My projects</NavLink>
        <NavLink to='myContributions'  className="text-center hover:bg-gray-500 w-2/3 my-2 p-2 rounded-md hover:text-white hover:cursor-pointer mx-auto">My Contributions</NavLink>
    </div>
  )
}

export default ProfilePanel