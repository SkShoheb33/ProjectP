import React, { useState } from 'react'
import Navbar from './Navbar'
import ProjectsTab from './ProjectsTab'
import ProjectInfo from './ProjectInfo'
import ExploreTrendings from './ExploreTrendings'
import CurrentProject from './CurrentProject'
import Updates from './Updates'
import TrendingProjects from './TrendingProjects'


function Main(props) {
  let closeAll =()=>{
    setMain('hidden');
    setExploreTrendings('hidden');
    setProjectInfo('hidden');
  }
  const [main,setMain] = useState('flex');
  const [exploreTrendings,setExploreTrendings] = useState('hidden');
  const [projectInfo,setProjectInfo] = useState('hidden');
  
  let goToExplore =()=>{
    closeAll();
    setExploreTrendings('flex');
  }
  let goToInfo=()=>{
    closeAll();
    setProjectInfo('flex')
  }
  let goToMain=()=>{
    closeAll();
    setMain('flex')
  }
  return (
    <div className='w-full'>
        <Navbar goToProfile={props.goToProfile}/>
        <div className='flex w-full'>
          <div className='flex w-1/5'>
            <ProjectsTab newProject={props.newProject}/>
          </div>
          <div className={`${main} w-4/5`}>
            <div className='flex flex-col px-5 w-4/5 items-start'>
                <CurrentProject goToWorkSpace={props.goToWorkSpace}/>
                <Updates/>
            </div>
            <div className='flex w-1/4'>
              <TrendingProjects goToExplore={goToExplore} goToInfo={goToInfo}/>
            </div>
          </div>
          <div className={`${exploreTrendings} w-4/5`}>
              <ExploreTrendings goToMain={goToMain} goToInfo={goToInfo}/> 
          </div>
          <div className={`${projectInfo} w-4/5`}>
              <ProjectInfo goToMain={goToMain}/>
          </div>
          
        </div>
    </div>
  )
}
export default Main
// 
// 