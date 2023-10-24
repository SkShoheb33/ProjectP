import React, { useState } from 'react'
import Todo from './Todo'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
function Todos(props) {
  const [active,setActive] =  useState('hidden');
  return (
    <div className='relative flex flex-col items-start p-3 h-[92vh] overflow-y-scroll'>
        {props.todos.map((todo,index)=><Todo key={index} todo={todo}/>)}
        <div onClick={()=>setActive(active==='w-full'?'hidden':'w-full')} className='hover:cursor-pointer absolute right-8 bottom-8 bg-blue-600 text-white w-[40px] h-[40px] flex justify-center items-center text-2xl rounded-full'>
            <FontAwesomeIcon className={active==='hidden'?'':'hidden'} icon={faPlus} />
            <div className={`text-xs ${active!=='hidden'?'':'hidden'}` }>Cancel</div>
        </div>
        {/* new item to add */}
        <div className={active}>
          <div className='flex justify-between w-full'>
              <div className='font-bold  '>
                  <input type='text' placeholder='Enter task name' className='p-1 rounded-md border border-black'/>
              </div>
              <div className='hover:cursor-pointer bg-blue-500 text-white py-1 px-4 rounded-md'>Add</div>
          </div>
          <div className='text-justify my-2 w-full '>
              <textarea rows={4} placeholder='enter discritpion' className='w-full p-2 rounded-md border border-black' ></textarea>
          </div>
        </div>
    </div>
  )
}

export default Todos