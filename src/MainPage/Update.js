import React from 'react'

function Update(props) {
  return (
    <div className='flex my-3'>
        <div className='font-bold'>{props.update.project} : </div>
        <div className='font-normal mx-2'>{props.update.update} </div>
    </div>
  )
}

export default Update