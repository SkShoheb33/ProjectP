import React from 'react'
import LeftPanel from './LeftPanel'

import { Outlet } from 'react-router-dom'
function WorkSpace() {
  return (
    <div className='w-full'>
        <div className='flex w-full'>
            <div className='flex w-1/5'>
                <LeftPanel/>
            </div>
            <div className='w-4/5'>
                <Outlet/>
            </div>
        </div>
    </div>
  )
}

export default WorkSpace;
