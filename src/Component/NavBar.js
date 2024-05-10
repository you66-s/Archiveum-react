import React from 'react';
import logo from '../Pages/About us/Image/logo.png';
import "../Style/navStyle.css"
import Buttons from "./Buttons";

function NavBar(props) {
    return(
        <nav className="nav-bar">
            <a href="../Pages/Landing_Page.js"><img id="logo" src={logo} alt="archiveum"/></a>
            <ol className="List-parent">
                <li className="List-item">{props.link1}</li>
                <li className="List-item">{props.link2}</li>
                <li className="List-item">{props.link3}</li>
                <li className="List-item">{props.link4}</li>
            </ol>
            <span onClick={()=>alert("Connected")} id="connexionBtn"><Buttons value="Connecter" /></span>

        </nav>
    );
}
export default NavBar;