import React from 'react'
import RecentProject from './RecentProject'
import { Link } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
function ProjectsTab(props) {
  return (
    <React.Fragment>
        <div className='h-[92vh] w-full bg-gray-400 p-4 border '>
            <Link to='/newproject'><div  className='text-center hover:cursor-pointer bg-blue-600 p-1 rounded-md text-xl text-white'><FontAwesomeIcon className='mx-1' icon={faPlus} />New Project</div></Link>
            <div className=''><input type='search' placeholder='search recent project' className='bg-gray-300 w-full rounded-md my-8 px-2 py-1'/></div>
            <div className='text-left'>Recent projects</div>
            {props.recentProjects.map((project,index)=><RecentProject key={index} project={project}/>)}
        </div>
    </React.Fragment>
  )
}

export default ProjectsTab