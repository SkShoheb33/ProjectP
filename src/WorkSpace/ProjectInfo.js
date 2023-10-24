import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faThumbsUp,faPercent } from '@fortawesome/free-solid-svg-icons'
function ProjectInfo(props) {
  return (
    <div className='flex flex-col items-start p-6'>
        <div className='text-2xl font-bold'>{props.currentProject.projectName}</div>
        <div className='text-lg'>Created by : <span>{props.currentProject.userName}</span></div>
        <div className='font-normal text-justify mt-3'>{props.currentProject.projectDesc}</div>
        <div className='font-normal text-justify mt-5'>{props.currentProject.projectInfo}</div>
        <div className='flex flex-row w-full my-7 justify-between'>
            <div className='flex w-1/5 justify-between text-xl'>
              <div className='flex items-center w-1/3 justify-around'>
                  <FontAwesomeIcon icon={faThumbsUp} />
                  {props.currentProject.likes}
              </div>
              <div className='flex items-center w-1/3 justify-around'>
                  <FontAwesomeIcon icon={faPercent} />
                  {props.currentProject.status}
              </div>
            </div>
        </div>
        <div className='text-xl font-bold'>Contributors : </div>
        <div className='flex flex-wrap w-full'>
          {props.currentProject.roles.map((obj,index)=>{return(
            <div className='flex w-1/3 my-1'>
            <div className='font-semibold'>{obj.userName} : </div>
            <div className='font-normal mx-2'>{obj.role} </div>
          </div>
          )})}
          
        </div>
    </div>
  )
}

export default ProjectInfo