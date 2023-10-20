import React from 'react'
import MyContribution from './MyContribution'
function MyContributions() {
    let projects = [{projectId:'1',project:'Project1',user:'username1',desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at metus quis mi facilisis volutpat. Vivamus sit amet ante vel justo tristique tincidunt.',role:'designer',likes:'236',status:'100'},
    {projectId:'1',project:'Project2',user:'username1',desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at metus quis mi facilisis volutpat. Vivamus sit amet ante vel justo tristique tincidunt.',role:'designer',likes:'236',status:'100'},
    {projectId:'1',project:'Project3',user:'username1',desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at metus quis mi facilisis volutpat. Vivamus sit amet ante vel justo tristique tincidunt.',role:'designer',likes:'236',status:'100'},
    {projectId:'1',project:'Project4',user:'username1',desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at metus quis mi facilisis volutpat. Vivamus sit amet ante vel justo tristique tincidunt.',role:'designer',likes:'236',status:'100'}]
  return (
    <div className='p-3 scroll-behaviour'>
        {projects.map((project,index)=><MyContribution key={index} project={project}/>)}
    </div>
  )
}

export default MyContributions