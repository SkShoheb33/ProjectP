import React,{useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
function LeftPanel(props) {
  let active = 'bg-gray-500 text-white';
  let inActive = 'bg-transparent text-black'
  const [projectInfoTab,setProjectInfoTab] = useState(active);
  const [todoListTab,setTodoListTab] = useState(inActive);
  const [roadMapTab,setRoadMapTab] = useState(inActive);
  const [communicateTab,setCommunicateTab] = useState(inActive);
  let setAllInActive= ()=>{
    setProjectInfoTab(inActive);
    setTodoListTab(inActive);
    setRoadMapTab(inActive);
    setCommunicateTab(inActive);
  }
  let toggleTabs = (btn)=>{
    props.toggleTabs(btn);
    setAllInActive();
    if(btn===2){
      setProjectInfoTab(active);
    }else if(btn===3){
      setTodoListTab(active);
    }else if(btn===4){
      setRoadMapTab(active);
    }else if(btn===5){
      setCommunicateTab(active);
    }else if(btn===6){
      setProjectInfoTab(active);
    }
    console.log(btn);
  }
  return (
    <div className='bg-gray-400 h-[92vh] w-full '>
        <div onClick={()=>toggleTabs(1)} className='flex my-12  rounded-md bg-blue-500 text-white w-3/4 mx-auto py-2 hover:cursor-pointer items-center justify-center'>
            Go to Github
        </div>
        <div className='flex flex-col my-12'>
            <div onClick={()=>toggleTabs(2)} className={`flex ${projectInfoTab} justify-center items-center my-2 hover:bg-gray-500 w-2/3 mx-auto hover:cursor-pointer rounded-md py-2 hover:text-white`}>Project Details</div>
            <div onClick={()=>toggleTabs(3)} className={`flex ${todoListTab} justify-center items-center my-2 hover:bg-gray-500 w-2/3 mx-auto hover:cursor-pointer rounded-md py-2 hover:text-white`}>To Do List</div>
            <div onClick={()=>toggleTabs(4)} className={`flex ${roadMapTab} justify-center items-center my-2 hover:bg-gray-500 w-2/3 mx-auto hover:cursor-pointer rounded-md py-2 hover:text-white`}>Project Roadmap</div>
            <div onClick={()=>toggleTabs(5)} className={`flex ${communicateTab} justify-center items-center my-2 hover:bg-gray-500 w-2/3 mx-auto hover:cursor-pointer rounded-md py-2 hover:text-white`}>Communicate</div>
        </div>
        <div onClick={()=>toggleTabs(6)} className='flex rounded-md mt-12 bg-gray-500 text-white w-3/4 mx-auto py-2 hover:cursor-pointer items-center justify-center'>
            <FontAwesomeIcon className='mr-2' icon={faArrowLeft} />Exit WorkSpace
        </div>
    </div>
  )
}

export default LeftPanel