import React from 'react'
import { Link } from 'react-router-dom'

function CurrentProject(props) {

  return (
    <React.Fragment>
        <div className='flex flex-col w-full my-6'>
            <div className='flex'>Current Project</div>
            <div className='flex justify-between items-center'>
                <div className='flex flex-col'>
                    <div className='flex text-2xl'>{props.currentProject.projectName}</div>
                    <div className='flex'>Created by : <span className='mx-3'>{props.currentProject.userName}</span></div>
                </div>
                <Link to='/workspace/projectDetails' className='hover:cursor-pointer bg-blue-500 flex justify-center items-center px-5 py-2  text-white rounded-md '>Go to Workspace</Link>
            </div>
            <div className='text-justify my-5'>{props.currentProject.projectDesc}</div>
            <hr/>
        </div>
    </React.Fragment>
  )
}

export default CurrentProject;