import './App.css';
import Main from './MainPage/Main';
import Home from './startingPage/Home';
import WorkSpace from './WorkSpace/WorkSpace';
import ProfileMain from './Profile/ProfileMain';
import { useState } from 'react';
import NewProject from './MainPage/NewProject'
function App() {
  let closeAll = ()=>{
    setHome('hidden')
    setMain('hidden')
    setWorkSpace('hidden')
    setProfile('hidden');
    setNewProjectTab('hidden')
  }
  const [home,setHome] = useState('hidden');
  const [main,setMain] = useState('');
  const [workSpace,setWorkSpace] = useState('hidden');
  const [profile,setProfile] = useState('hidden');
  const [newProjectTab,setNewProjectTab] = useState('hidden');
  let goToMain = ()=>{
    closeAll();
    setMain('');
  }
  let goToWorkSpace=()=>{
    closeAll();
    setWorkSpace('');
  }
  let goToProfile=()=>{
    closeAll();
    setProfile('');
  }
  let newProject = ()=>{
    closeAll();
    setNewProjectTab('');
  }
  return (
    <div className="App">
      <div className={home}>
        <Home goToMain={goToMain} goToProfile={goToProfile}/>
      </div>
      <div className={main}>
        <Main goToWorkSpace={goToWorkSpace} goToProfile={goToProfile} newProject={newProject}/>
      </div>
      <div className={workSpace}>
        <WorkSpace goToMain={goToMain} goToProfile={goToProfile}/>
      </div>
      <div className={profile}>
        <ProfileMain goToMain={goToMain}/>
      </div>
      <div className={newProjectTab}>
        <NewProject newProject={newProject} goToMain={goToMain}/>
      </div>
    </div>
    );
  }
  

export default App;