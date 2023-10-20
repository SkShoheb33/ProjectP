import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCircleDot } from '@fortawesome/free-solid-svg-icons'
function RoadTask(props) {
  return (
    <div className='flex flex-col p-3 px-6 relative'>
        <div className='absolute flex flex-col items-center -left-4 top-5'>
            <FontAwesomeIcon className='mx-2 text-green-900' icon={faCircleDot} />
        </div>
        <div className='flex font-bold my-1'>
            {props.task.task}
        </div>
        <div className='flex font-normal text-justify'>{props.task.desc}</div>
    </div>
  )
}

export default RoadTask