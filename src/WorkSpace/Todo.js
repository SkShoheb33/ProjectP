import React from 'react'

function Todo(props) {
  return (
    <div className='my-4 p-3'>
        <div className='flex justify-between'>
            <div className='font-bold text-2xl'>{props.todo.task}</div>
            <div className='hover:cursor-pointer bg-blue-500 text-white py-1 px-4 rounded-md'>Mark ar Completed</div>
        </div>
        <div className='text-justify my-2'>
            {props.todo.taskDesc}
        </div>
    </div>
  )
}

export default Todo