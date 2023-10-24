import React from 'react'
import ExploreTrending from './ExploreTrending'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
function ExploreTrendings(props) {
    let trendingProject = [{projectId:"1",project:"project1",createdBy:"user1",desc:"desc1",likes:"234",completed:"50"},
    {projectId:"1",project:"project2",createdBy:"user2",desc:"desc2",likes:"234",completed:"60"},{projectId:"3",project:"project3",createdBy:"user3",desc:"desc3",likes:"234",completed:"40"}]
  return (
    <div className='flex flex-col w-full items-start px-6'>
        <div className='flex items-center text-3xl mt-9'>
          <Link to='/'>
            <FontAwesomeIcon  className='mr-2 hover:cursor-pointer hover:bg-gray-200 p-1 rounded-full' icon={faArrowLeft} />
          </Link>
          <div>Trending Projects</div>
        </div>
        {trendingProject.map((project,index)=><ExploreTrending key={index} project={project} goToInfo={props.goToInfo}/>)}
    </div>
  )
}

export default ExploreTrendings