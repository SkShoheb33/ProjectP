import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faThumbsUp} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
function TrendingProject(props) {
  return (
    <div className='flex flex-col my-4 items-start w-full'>
        <div className='font-semibold '>{props.project.project}</div>
        <div className='font-light text-xs'>Created by : {props.project.createdBy}</div>
        <div className='font-normal text-md'>{props.project.desc}</div>
        <div className='flex justify-between w-full'>
            <div className='text-sm w-1/4 flex justify-between items-center'>
                <FontAwesomeIcon  icon={faThumbsUp} />
                {props.project.likes}
            </div>
            <Link to='explore/projectInfo' className='hover:cursor-pointer bg-blue-500 text-white text-sm rounded-md px-2 py-1'>View info</Link>
        </div>
    </div>
  )
}

export default TrendingProject