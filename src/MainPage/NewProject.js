import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCircleXmark,faBackward } from '@fortawesome/free-solid-svg-icons'
import Navbar from './Navbar'
function NewProject(props) {
    let roles = ['ux designer','front end','back end','tester']
  return (
    <div className='h[100vh]'>
        <Navbar/>
        <div className='flex flex-col h-[92vh]'>
            <div className='flex flex-col items-start w-1/2 my-12  mx-auto'>
                <div onClick={props.goToMain} className='text-xl flex items-center justify-center hover:cursor-pointer'><FontAwesomeIcon className='mr-4' icon={faBackward} />Back</div>
                <div className='flex items-start flex-col my-6 w-full'>
                    <div className='font-bold text-2xl'>Create a Project</div>
                    <div className='font-thin text-md'>Through a project workspace you can collaborate with others for a common goal</div>
                    <div className='flex flex-col items-start w-full my-4'>
                        <div className=''>Project Name :</div>
                        <div className='w-full'><input type='text' className='p-2 rounded-md my-1 py-1 w-full bg-gray-200'/></div>
                    </div>
                    <div className='flex flex-col items-start w-full my-4'>
                        <div className=''>Project Tagline/Simple description :</div>
                        <div className='w-full'><input type='text' className='p-2 rounded-md my-1 py-1 w-full bg-gray-200'/></div>
                    </div>
                    <div className='flex flex-col items-start w-full my-4'>
                        <div className=''>Project Information :</div>
                        <div className='w-full'><textarea rows={5} type='text' className='p-2 rounded-md my-1 py-1 w-full bg-gray-200'></textarea></div>
                    </div>
                    <div className='flex flex-col items-start w-full my-4'>
                        <div className=''>Github  repository link : </div>
                        <div className='w-full'><input type='text' className='p-2 rounded-md my-1 py-1 w-full bg-gray-200'/></div>
                    </div>
                    <div className='flex flex-col items-start w-full my-4'>
                        <div className=''>Roles Required : </div>
                        <div className='flex w-full items-center'><input type='text' className='rounded-l-md my-1 py-1 p-2 w-5/6 bg-gray-200'/><div className=' bg-blue-400 hover:bg-blue-500 hover:cursor-pointer w-1/6 flex justify-center items-center text-white rounded-r-md py-1'>Add</div></div>
                    </div>
                    <div className='flex items-start w-full my-4 justify-around flex-wrap'>
                        {
                            roles.map((role,index)=>{
                            return <div key={index} className='flex justify-between border items-center w-1/4 m-2 px-3 py-1'> 
                                        {role}
                                        <FontAwesomeIcon className='hover:text-red-600 hover:cursor-pointer' icon={faCircleXmark} />
                                    </div>
                            })
                        }
                    </div>
                    <div className='w-full bg-blue-500 hover:bg-blue-600 hover:cursor-pointer text-white py-2 rounded-md'>
                        Submit
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewProject