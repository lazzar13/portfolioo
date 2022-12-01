import React from "react";
import {GiPlagueDoctorProfile,GiRamProfile,Gi3DGlasses,Gi3DMeeple,GiShoonerSailboat,Gi3DHammer} from 'react-icons/gi'
    



const Navbar=()=>{

    return(

        <div>
            <nav className='navbar'>
                <ul className='navbar-nav'>
                    <li className='nav-item'>
                    <a className="nav-link" href="#skillsWrapper"><GiPlagueDoctorProfile/></a>
                    </li>
                    <li className='nav-item'>
                    <a className="nav-link" href="#schoolWrapper"><GiRamProfile/></a>
                    </li>
                    <li className='nav-item'>
                    <a className="nav-link" href="#ExperienceWrapper"><Gi3DGlasses/></a>
                    </li>
                    <li className='nav-item'>
                    <a className="nav-link" href="#ProjectsWrapper"><Gi3DMeeple/></a>
                    </li>
                    <li className='nav-item'>
                    <a className="nav-link" href="#profileImg"><GiShoonerSailboat/></a>
                    </li>
                </ul>
            </nav>
        </div>
    )



}

export default Navbar;