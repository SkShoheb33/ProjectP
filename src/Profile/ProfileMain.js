import React, { useState } from 'react'
import Navbar from'../MainPage/Navbar'
import ProfilePanel from './ProfilePanel'
import Profile from './Profile'
import MyContributions from './MyContributions'
import MyProjects from './MyProjects'
function ProfileMain(props) {
    const [profileClass,setProfileClass] = useState('flex w-4/5');
    const [projectClass,setProjectClass] = useState('hidden w-4/5');
    const [contributionClass,setContributionClass] = useState('hidden w-4/5');
    let toggleTabs = (toActive)=>{
        if(toActive===1){
            if(profileClass==='flex w-4/5')return;
            setProfileClass('flex w-4/5');
            setProjectClass('hidden w-4/5');
            setContributionClass('hidden w-4/5');
        }else if(toActive===2){
            if(projectClass==='flex w-4/5')return;
            setProfileClass('hidden w-4/5');
            setProjectClass('flex w-4/5');
            setContributionClass('hidden w-4/5');
        }else if(toActive===3){
            if(contributionClass==='flex w-4/5')return;
            setProfileClass('hidden w-4/5');
            setProjectClass('hidden w-4/5');
            setContributionClass('flex w-4/5');
        }
    }
  return (
    <div className='flex flex-col'>
        <Navbar goToProfile={props.goToProfile}/>
        <div className='flex h-[92vh] w-full'>
            <div className='flex w-1/5'>
                <ProfilePanel toggleTabs={toggleTabs} goToMain={props.goToMain}/>
            </div>
            <div className={profileClass}>
                <Profile />
            </div>
            <div className={projectClass}>
                <MyProjects />
            </div>
            <div className={contributionClass}>
                <MyContributions />
            </div>
        </div>
    </div>
  )
}
// <Profile/>
export default ProfileMain