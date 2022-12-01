import React,{useState, Navigate} from "react";
import cer from './src/certificate.png'


const Card=({school,year,par,name,yearTo,link,company,certificate,img,imgP,opis,technology,type})=>{
    //skills
    if(img){
      if(certificate){
       return(<div id="skillsCard">
            <span><h3>{name}</h3></span>
            <span><img src={img} id='schoolImg'></img></span>
            <span><img src={cer} id='cerImg'></img></span>
        </div>)}
        else{
            return(<div id="skillsCard">
            <span><h3 id='skillsText'>{name}</h3></span>
            <span><img src={img} id='schoolImg'></img></span>
        </div>) 
        }
    }
    //school
    else if(school){
    return(
            <div id='schoolCard'>
            <span><h1 style={{textAlign:'center'}}>{school}</h1></span>
            <p >{year}</p>
            <p id='schoolPar'>{par}</p>
            </div>
    )}
    //projects
    else if(type){
        return(
            <div id='ProjectsCard'>
            <div style={{}}>
            <img src={imgP} id='projectsImg'></img>
            <div style={{textAlign:'center',marginTop:'5px'}}><span><img src={type} id='projectsTechn'></img></span>
            <span><img id='projectsTechn' src={technology}></img></span></div>
            </div>
            <div>
            <span><h3 style={{height:'35px',marginTop:'0px',paddingLeft:'5px'}}>{name}</h3></span>
            <span><p id='projectsPar'>{opis}</p></span></div>
            
            
            </div>
        )
    }
    //experience
    else{
        return(
        <div id='ExperienceCard'>
        <span><h1>{name}</h1>
        <h4>{company}</h4></span>
        <span><p>{year+'-'+yearTo}</p></span>
        <p id='schoolPar'>{par}</p></div>)
    }
}

export default Card;