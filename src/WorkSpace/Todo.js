import React from 'react'

function Todo(props) {
  return (
    <div className='my-4 p-3'>
        <div className='flex justify-between'>
            <div className='font-bold text-2xl'>{props.task.task}</div>
            <div className='bg-blue-500 text-white py-1 px-4 rounded-md'>Mark ar Completed</div>
        </div>
        <div className='text-justify my-2'>
            {props.task.desc}
        </div>
    </div>
  )
}

export default Todo