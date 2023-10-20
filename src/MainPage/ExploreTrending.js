import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faThumbsUp,faPercent } from '@fortawesome/free-solid-svg-icons'
function ExploreTrending(props) {
  return (
    <div className='flex flex-col items-start w-full my-4'>
        <div className='flex flex-row justify-between items-center w-full'>
            <div className='flex flex-col items-start '>
                <div className='text-2xl'>{props.project.project}</div>
                <div className='text-md'>Created by : {props.project.createdBy}</div>
            </div>
            <div className='flex w-1/4 items-center justify-around'>
                <div className='flex items-center w-1/5 justify-around'>
                    <FontAwesomeIcon icon={faThumbsUp}  />
                    {props.project.likes}
                </div>
                <div className='flex items-center w-1/5 justify-around'>
                    <FontAwesomeIcon icon={faPercent} />
                    {props.project.completed}
                </div>
                <div onClick={props.goToInfo} className='flex bg-blue-500 text-white px-2 py-1 rounded-md hover:cursor-pointer'>View more</div>
            </div>
        </div>
        <div className='text-lg mt-2 text-justify'>{props.project.desc}</div>
    </div>
  )
}

export default ExploreTrending