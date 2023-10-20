import React, { useState } from 'react'

function ProfilePanel(props) {
  const [active1,setActive1] = useState('bg-gray-500 text-white');
  const [active2,setActive2] = useState('bg-transparent text-black');
  const [active3,setActive3] = useState('bg-transparent text-black');
  let toggle=(btn)=>{
      props.toggleTabs(btn);
      if(btn===1){
        setActive1('bg-gray-500 text-white')
        setActive2('bg-transparent text-black')
        setActive3('bg-transparent text-black')
      }else if(btn===2){
        setActive2('bg-gray-500 text-white')
        setActive1('bg-transparent text-black')
        setActive3('bg-transparent text-black')
      }else if(btn===3){
        setActive3('bg-gray-500 text-white')
        setActive1('bg-transparent text-black')
        setActive2('bg-transparent text-black')
      }
  }
  return (
    <div className='bg-gray-400 w-full flex flex-col '>
        <div onClick={props.goToMain} className='my-5 bg-blue-500 w-2/3 mx-auto text-white py-2 rounded-md hover:cursor-pointer hover:bg-blue-600'>Go to home</div>
        <div onClick={()=>toggle(1)} className={`hover:bg-gray-500 ${active1} w-2/3 my-2 mt-20 p-2 rounded-md hover:text-white hover:cursor-pointer mx-auto`}>Profile</div>
        <div onClick={()=>toggle(2)} className={`hover:bg-gray-500 ${active2} w-2/3 my-2 p-2 rounded-md hover:text-white hover:cursor-pointer mx-auto`}>My projects</div>
        <div onClick={()=>toggle(3)} className={`hover:bg-gray-500 ${active3} w-2/3 my-2 p-2 rounded-md hover:text-white hover:cursor-pointer mx-auto`}>My Contributions</div>
    </div>
  )
}

export default ProfilePanel