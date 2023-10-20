import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCircleDot } from '@fortawesome/free-solid-svg-icons'
import RoadTask from './RoadTask'
function RoadMap() {
    let task = [
        {task:'Task1',desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
        {task:'Task2',desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
        {task:'Task3',desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
    ]
  return (
    <div className='flex items-start flex-col p-3'>
        <div className='flex w-1/2 mx-auto my-4'>
            <div className='flex w-1/3 items-center'><FontAwesomeIcon className='mx-2 text-green-900' icon={faCircleDot} />Completed</div>
            <div className='flex w-1/3 items-center'><FontAwesomeIcon className='mx-2 text-yellow-400' icon={faCircleDot} />In Progress</div>
            <div className='flex w-1/3 items-center'><FontAwesomeIcon className='mx-2 text-red-600' icon={faCircleDot} />Yet to start</div>
        </div>
        <div className='flex flex-col'>
            {task.map((task,index)=><RoadTask key={index} task={task}/>)}
        </div>
    </div>
  )
}

export default RoadMap