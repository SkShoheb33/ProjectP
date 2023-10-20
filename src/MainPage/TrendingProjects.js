import React from 'react'
import TrendingProject from './TrendingProject'
function TrendingProjects(props) {
    let trendingProject = [{projectId:"1",project:"project1",createdBy:"user1",desc:"desc1",likes:"234"},
    {projectId:"1",project:"project2",createdBy:"user2",desc:"desc2",likes:"234"},{projectId:"3",project:"project3",createdBy:"user3",desc:"desc3",likes:"234"}]
  return (
    <div className='bg-gray-400 w-full flex flex-col items-start p-3'>
        <div className='text-xl font-bold my-2'>
            TrendingProject
        </div>
        {trendingProject.map((project,index)=>
            <TrendingProject key={index} project={project} goToInfo={props.goToInfo}/>
        )}
        <div onClick={props.goToExplore} className='hover:cursor-pointer bg-gray-500 w-full rounded-md py-1 my-6 text-white'>Explore</div>
    </div>
  )
}

export default TrendingProjects