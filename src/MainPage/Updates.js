import React from 'react'
import Update from './Update'
function Updates() {
    let updates = [{project:"project1",update:"update1"},{project:"project2",update:"update2"},{project:"project3",update:"update3"}]
  return (
    <div className='flex flex-col'>
        Updates on Projects Observing
        <div className='flex flex-col'>
            {updates.map((update,index)=><Update key={index} update={update}/>)}
        </div>
    </div>
  )
}

export default Updates