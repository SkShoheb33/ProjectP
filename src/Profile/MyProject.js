import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faThumbsUp,faPercent } from '@fortawesome/free-solid-svg-icons'
function MyProject(props) {
  return (
    <div className='flex flex-col items-start w-full my-5 p-4'>
        <div className='flex flex-row justify-between items-center w-full'>
            <div className='flex flex-col items-start '>
                <div className='text-2xl font-bold'>{props.project.project}</div>
                <div className='text-md'>Created by : {props.project.user}</div>
            </div>
            <div className='flex w-1/4 items-center justify-around'>
                <div className='flex items-center w-1/5 justify-around'>
                    <FontAwesomeIcon icon={faThumbsUp} />
                    {props.project.likes}
                </div>
                <div className='flex items-center w-1/5 justify-around'>
                    <FontAwesomeIcon icon={faPercent} />
                    {props.project.status}
                </div>
                <div className='flex bg-blue-500 text-white px-2 py-1 rounded-md hover:cursor-pointer'>Go to Workspace</div>
            </div>
        </div>
        <div className='text-lg mt-2 text-justify'>{props.project.desc}</div>
    </div>
  )
}

export default MyProject