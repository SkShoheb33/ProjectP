import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faThumbsUp,faPercent } from '@fortawesome/free-solid-svg-icons'
function MyContribution(props) {
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
                <div className='flex bg-blue-500 text-white px-2 py-1 rounded-md hover:cursor-pointer'>View more</div>
            </div>
        </div>
        <div className='text-lg mt-2 text-justify'>{props.project.desc}</div>
        <div className='my-1'>Role : <span className='border border-gray-200 px-2 rounded-md py-1 bg-gray-100'>{props.project.role}</span></div>
    </div>
  )
}

export default MyContribution