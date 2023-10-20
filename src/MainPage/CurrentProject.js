import React from 'react'

function CurrentProject(props) {
  return (
    <React.Fragment>
        <div className='flex flex-col w-full my-6'>
            <div className='flex'>Current Project</div>
            <div className='flex justify-between items-center'>
                <div className='flex flex-col'>
                    <div className='flex text-2xl'>Project name</div>
                    <div className='flex'>Created by : <span className='mx-3'>user name</span></div>
                </div>
                <div onClick={()=>props.goToWorkSpace()} className='hover:cursor-pointer bg-blue-500 flex justify-center items-center px-5 py-2  text-white rounded-md '>Go to Workspace</div>
            </div>
            <div className='text-justify my-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at metus quis mi facilisis volutpat. Vivamus sit amet
            ante vel justo tristique tincidunt.</div>
            <hr/>
        </div>
    </React.Fragment>
  )
}

export default CurrentProject