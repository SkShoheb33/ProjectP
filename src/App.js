import './App.css';
import {Routes,Route} from 'react-router-dom'
import Main from './MainPage/Main';
import Home from './startingPage/Home';
import WorkSpace from './WorkSpace/WorkSpace';
import ProfileMain from './Profile/ProfileMain';
import NewProject from './MainPage/NewProject'
import React from 'react';
import Navbar from './MainPage/Navbar';
import Profile from './Profile/Profile';
import MyContributions from './Profile/MyContributions'
import MyProjects from './Profile/MyProjects'
import ProjectInfo from './WorkSpace/ProjectInfo'  
import Communicate from './WorkSpace/Communicate'
import Todos from './WorkSpace/Todos'
import RoadMap from './WorkSpace/RoadMap'
import ExploreTrendings from './MainPage/ExploreTrendings';
import CurrentProject from './MainPage/CurrentProject';
import TrendingProjects from './MainPage/TrendingProjects';
import Updates from './MainPage/Updates'
import Login from './startingPage/Login'
import Register from './startingPage/Register'
import { AuthProvider } from './utils/auth';
import RequireAuth from './utils/RequireAuth';
const LazyProjectInfo = React.lazy(()=>import('./MainPage/ProjectInfo'))
function App() {
    let userData = {
        "userId":"1",
        "userName":"tester1",
        "password":"test1",
        "email":"example@gmail.com",
        "discription":"I am a full stack developer",
        "currentProject":"project1",
        "myProjects":["project1","project3"],
        "myContributions":["project4"]
    }
    let currentProject = {
      "projectId":"2",
      "projectName":"project2",
      "userName":"tester1",
      "projectDesc":"Let make the thing unitly 2.",
      "projectInfo":"This is a react project where we can share our idea in the public and make a team.",
      "githubRepo":"https://www.github.com",
      "likes":234,
      "status":86,
      "roles":[
          {"userName":"tester1","role":"Ux designer"},
          {"userName":"tester1","role":"Ux designer"},
          {"userName":"tester1","role":"Ux designer"}
      ],
      "tasks":[
          {
              "task":"Task1",
              "taskDesc":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
              "taskStatus":"Completed"
          },
          {
              "task":"Task1",
              "taskDesc":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
              "taskStatus":"Completed"
          },
          {
              "task":"Task1",
              "taskDesc":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
              "taskStatus":"Completed"
          }
      ]
    }
  return (
    <AuthProvider>
        <Navbar userName={userData.userName}/>
        <div className='relative top-[8vh]'>
          <Routes className='relative top-[8vh]'>
              <Route path='/' element={<RequireAuth><Main recentProjects={userData.myProjects}/></RequireAuth>}>
                  <Route path='' element={<div className='flex w-full'>
                          <div className='flex flex-col px-5 w-3/4 items-start'>
                                <CurrentProject currentProject={currentProject}/>
                                <Updates/>
                          </div>
                          <div className='flex w-1/4'>
                            <TrendingProjects/>
                          </div>
                      </div>}/>
                  <Route path='explore' element={<ExploreTrendings/>}/>
                  <Route path='explore/projectInfo' element={
                    <React.Suspense fallback="Loading..."> <LazyProjectInfo/></React.Suspense>}/>
              </Route>
              <Route path='home' element={<Home/>}>
                  <Route path='' element={
                    <div className=' text-white flex h-1/2  w-3/4 mx-auto items-center justify-around'>
                      <div className='text-7xl font-bold text-right mx-2 w-1/4'>
                          Make <br/> Dream <br/> Real
                      </div>
                      <div className='text-xl text-left mx-2 w-2/3 '>
                          Welcome!
                          <br/>
                          <br/>
                          At Project P, we are passionate about fostering creativity, collaboration, and innovation. Our platform is a dynamic space where individuals and teams come together to turn their ideas into reality, and where contributors from diverse backgrounds and expertise join forces to make a difference
                      </div>
                    </div> }>
                  </Route>
                  <Route path='login' element={<Login/>}/>
                  <Route path='register' element={<Register/>}/>
              </Route>
              <Route path='profile' element={<RequireAuth><ProfileMain/></RequireAuth>}>
                  <Route path='myProfile' element={<Profile userData={userData}/>}/>
                  <Route path='myProjects' element={<MyProjects myProjects ={userData.myProjects}/>}/>
                  <Route path='myContributions' element={<MyContributions myContributions={userData.myContributions} />}/>
              </Route>
              <Route path='workspace' element={<RequireAuth><WorkSpace/></RequireAuth>}>
                  <Route path='projectDetails' element={<ProjectInfo currentProject={currentProject}/>}/>
                  <Route path='todos' element={<Todos todos={currentProject.tasks}/>}/>
                  <Route path='projectRoadmap' element={<RoadMap roadMap={currentProject.tasks}/>}/>
                  <Route path='communication' element={<Communicate/>}/>
              </Route>
              <Route path='newproject' element={<RequireAuth><NewProject/></RequireAuth>}/>
          </Routes>
        </div>
    </AuthProvider>
    );
  }
  

export default App;
