import React from 'react'
import ProfilePanel from './ProfilePanel'
import { Outlet } from 'react-router-dom'
function ProfileMain() {
   
  return (
    <div className='flex flex-col'>
        <div className='flex h-[92vh] w-full'>
            <div className='flex w-1/5'>
                <ProfilePanel />
            </div>
            <div className='w-4/5'>
                <Outlet/>
            </div>
        </div>
    </div>
  )
}
// <Profile/>
export default ProfileMain