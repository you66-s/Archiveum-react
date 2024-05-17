import React from 'react';
import star from './Icons/Star.png';
import profileIcon from './Icons/Ellipse 4.png';
import {useNavigate} from "react-router-dom";
function ProfileIcon(props) {
    const navigate = useNavigate();
    return (
        <div className="ProfileIcon flex flex-row items-center gap-2">
            <img className="Stars__img" src={star} alt="Score" width="16px" height="16px" />
            <p className='Score w-2'>3</p>
            <img src={profileIcon} alt={profileIcon} onClick={()=>{
                navigate("/profile")
            }}/>
        </div>
    );
}

export default ProfileIcon;