import React, { Component, useEffect } from "react";
import Navbar from "../containers/Navbar";
import './App.css';
import Content from "../containers/Content";
import Profile from "../containers/Profile";
import Education from "../containers/Education";
import Experience from "../containers/Experience";
import {SchoolData} from "../containers/SchoolData.js"
import { ExperienceData } from "../containers/ExperienceData";
import { Skills } from "../containers/Skills";
import Projects from "../containers/Projects";
import { project } from "../containers/project";
import react from '../containers/src/background.png'
import education from '../containers/src/education.png'
import skills from '../containers/src/skills.png'
import experience from '../containers/src/experience.png'
import background2 from '../containers/src/background2.png'
import exp from '../containers/src/background2experiment.png'

class App extends Component{
  constructor(){
    super()
    this.state={
      SchoolData:SchoolData,
      ExperienceData:ExperienceData,
      Skills:Skills,
      project:project,
      
  }
  
  }
  componentDidMount(){
    document.title='{Lazar Banic}'
  }
  

  render(){
   const {SchoolData}=this.state
   const {ExperienceData}=this.state
   const {Skills}=this.state
   const {project}=this.state
  return (<div>

    
   
    <Navbar></Navbar>
    <Profile></Profile>
    <Content Skills={Skills}></Content>
    <Education SchoolData={SchoolData}></Education>
    <Experience ExperienceData={ExperienceData}></Experience>
    <Projects project={project}></Projects>
  
    
    
    
   


   
    </div>
  ) 
}
}

export default App;
