import React from 'react';
import logo from '../Pages/About us/Image/logo.png';
function NavBar(props) {


    return(
        <nav className="nav-bar flex flex-row gap-2 items-center justify-between mb-10">
            <a href="../Pages/LandingPage.js"><img id="logo" src={logo} alt="archiveum"/></a>
            <ol className="List-parent flex flex-row gap-4">
                <li className="List-item p-2 rounded-lg hover:bg-[#5C54AC] hover:text-white">{props.link1}</li>
                <li className="List-item p-2 rounded-lg hover:bg-[#5C54AC] hover:text-white">{props.link2}</li>
                <li className="List-item p-2 rounded-lg hover:bg-[#5C54AC] hover:text-white">{props.link3}</li>
                <li className="List-item p-2 rounded-lg hover:bg-[#5C54AC] hover:text-white">{props.link4}</li>
            </ol>
            {props.button}
        </nav>
    );
}
export default NavBar;