import React from 'react'
import Todo from './Todo'

function Todos() {
    let tasks = [{task:"Task1",desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
    {task:"Task2",desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
    {task:"Task3",desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}]
  return (
    <div className='flex flex-col items-start p-3'>
        {tasks.map((task,index)=><Todo key={index} task={task}/>)}
    </div>
  )
}

export default Todos