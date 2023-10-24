import React from 'react'
import ProjectsTab from './ProjectsTab'
import { Outlet } from 'react-router-dom'
// import { useAuth } from '../utils/auth'


function Main(props) {
  return (
    <div className='flex w-full'>
        <div className='w-1/5'>
          <ProjectsTab recentProjects={props.recentProjects}/>
        </div>
        <div className='flex w-4/5'>
          <Outlet/>
        </div>
    </div>
  )
}
export default Main