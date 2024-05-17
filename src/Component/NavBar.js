import React from 'react';
import logo from '../Pages/About us/Image/logo.png';
import {Link} from "react-router-dom";
function NavBar(props) {


    return(
        <nav className="nav-bar flex flex-row gap-2 items-center justify-between mb-10">
            <a href="../Pages/LandingPage.js"><img id="logo" src={logo} alt="archiveum"/></a>
            <ol className="List-parent flex flex-row gap-4">
                <li className="List-item p-2 rounded-lg hover:bg-[#5C54AC] hover:text-white">{<Link to='/'>{props.link1}</Link>}</li>
                <li className="List-item p-2 rounded-lg hover:bg-[#5C54AC] hover:text-white">{<Link to='/docspace'>{props.link2}</Link>}</li>
                <li className="List-item p-2 rounded-lg hover:bg-[#5C54AC] hover:text-white">{<Link to='/addDoc'>{props.link3}</Link>}</li>
                <li className="List-item p-2 rounded-lg hover:bg-[#5C54AC] hover:text-white">{<Link to='/contact'>{props.link4}</Link>}</li>
                <li className="List-item p-2 rounded-lg hover:bg-[#5C54AC] hover:text-white">{<Link to='/about'>{props.link5}</Link>}</li>
            </ol>
            {props.button}
        </nav>
    );
}
export default NavBar;