import React, { useState } from 'react'
import Navbar from '../MainPage/Navbar'
import LeftPanel from './LeftPanel'
import ProjectInfo from './ProjectInfo'
import Communicate from './Communicate'
import Todos from './Todos'
import RoadMap from './RoadMap'
function WorkSpace(props) {
    const [projectInfoTab,setProjectInfoTab] = useState('');
    const [todoListTab,setTodoListTab] = useState('hidden');
    const [roadMapTab,setRoadMapTab] = useState('hidden');
    const [communicateTab,setCommunicateTab] = useState('hidden'); 
    let setAllTabsClosed=()=>{
        setProjectInfoTab('hidden');
        setTodoListTab('hidden');
        setRoadMapTab('hidden');
        setCommunicateTab('hidden');
    }
    let toggleTabs = (btn)=>{
        console.log(btn)
        setAllTabsClosed();
        if(btn===1){
            
        }else if(btn===2){
            setProjectInfoTab('');
        }else if(btn===3){
            setTodoListTab('');
        }else if(btn===4){
            setRoadMapTab('');
        }else if(btn===5){
            setCommunicateTab('');
        }else if(btn===6){
            props.goToMain();
        }
    }
  return (
    <div className='w-full'>
        <Navbar goToProfile={props.goToProfile}/>
        <div className='flex w-full'>
            <div className='flex w-1/5'>
                <LeftPanel toggleTabs = {toggleTabs}/>
            </div>
            <div className={`${projectInfoTab} w-4/5`}>
                <ProjectInfo/>
            </div>
            <div className={`${todoListTab} w-4/5`}>
                <Todos/>
            </div>
            <div className={`${roadMapTab} w-4/5`}>
                <RoadMap/>
            </div>
            <div className={`${communicateTab} w-4/5`}>
                <Communicate/>
            </div>
        </div>
    </div>
  )
}

export default WorkSpace