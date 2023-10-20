import React from 'react'
import MyProject from './MyProject'
function MyProjects() {
  let projects = [{projectId:'1',project:'Project1',user:'username1',desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at metus quis mi facilisis volutpat. Vivamus sit amet ante vel justo tristique tincidunt.',role:'designer',likes:'236',status:'100'},
    {projectId:'1',project:'Project1',user:'username1',desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at metus quis mi facilisis volutpat. Vivamus sit amet ante vel justo tristique tincidunt.',role:'designer',likes:'236',status:'100'},
    {projectId:'1',project:'Project1',user:'username1',desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at metus quis mi facilisis volutpat. Vivamus sit amet ante vel justo tristique tincidunt.',role:'designer',likes:'236',status:'100'}]
  return (
    <div className='p-3 scroll-behaviour'>
      {projects.map((project,index)=><MyProject key={index} project={project}/>)}
      
    </div>
  )
}

export default MyProjects