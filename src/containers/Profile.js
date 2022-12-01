import React from "react";


const Profile=()=>{
    

    return(
        <div style={{textAlign:"center",
                    marginTop:'30px'}}>
        
        <img alt='Lazar' id='profileImg' src='https://avatars.githubusercontent.com/u/101233010?v=4' ></img>
            <h1 id='profileText'>
                <span id='profileText' style={{color:'purple'}}>import </span>
                <span id='profileText' style={{color:'yellow'}}>{"{"}</span>
                <span id='profileText' style={{color:'Neon'}}> Lazar Banic </span>
                <span id='profileText' style={{color:'yellow'}}>{"}"}</span>
                <span id='profileText' style={{color:'purple'}}> from </span>
                <span id='profileText' style={{color:'orange'}}>'./Serbia/Kragujevac'</span>
                <span id='profileText' style={{color:'white'}}>;</span>
                
            </h1>
        </div>
    )
}

export default Profile;