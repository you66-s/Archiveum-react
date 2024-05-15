import React, {useState} from 'react';
import logo from '../Pages/About us/Image/logo.png';
import Buttons from "./Buttons";
function NavBar(props) {


    return(
        <nav className="nav-bar flex flex-row gap-2 items-center justify-between mb-10">
            <a href="../Pages/LandingPage.js"><img id="logo" src={logo} alt="archiveum"/></a>
            <ol className="List-parent flex flex-row gap-4">
                <li className="List-item p-2">{props.link1}</li>
                <li className="List-item p-2">{props.link2}</li>
                <li className="List-item p-2">{props.link3}</li>
                <li className="List-item p-2">{props.link4}</li>
            </ol>
            <span className="List-item p-2">{props.button}</span>
        </nav>
    );
}
export default NavBar;