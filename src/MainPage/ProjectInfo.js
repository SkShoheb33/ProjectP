import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faThumbsUp,faPercent,faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
function ProjectInfo() {
  return (
    <div className='flex flex-col items-start p-6'>
        <Link to='/explore'>
          <FontAwesomeIcon  className='mr-2 text-2xl hover:cursor-pointer hover:bg-gray-100 p-2 rounded-full mb-3' icon={faArrowLeft} />
        </Link>
        <div className='text-2xl font-bold'>Project name</div>
        <div className='text-lg'>Created by : <span>User name</span></div>
        <div className='font-normal text-justify mt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.</div>
        <div className='font-normal text-justify mt-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
        <div className='flex flex-row w-full my-7 justify-between'>
            <div className='flex w-1/5 justify-between text-xl'>
              <div className='flex items-center w-1/3 justify-around'>
                  <FontAwesomeIcon icon={faThumbsUp} />
                  123
              </div>
              <div className='flex items-center w-1/3 justify-around'>
                  <FontAwesomeIcon icon={faPercent} />
                  89%
              </div>
            </div>
            <div className='flex w-1/2 justify-around'>
              <div className='flex justify-center items-center bg-blue-500 hover:cursor-pointer w-1/3 text-white py-1 rounded-md font-semibold'>Join </div>
              <div className='flex justify-center items-center bg-gray-500 hover:cursor-pointer w-1/3 text-white py-1 rounded-md font-semibold'>Observe </div>
            </div>
        </div>
        <div className='text-xl font-bold'>Contributors : </div>
        <div className='flex flex-wrap w-full'>
          <div className='flex w-1/3 my-1'>
            <div className='font-semibold'>User name : </div>
            <div className='font-normal mx-2'>Position </div>
          </div>
        </div>
    </div>
  )
}

export default ProjectInfo