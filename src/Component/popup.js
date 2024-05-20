import React from 'react';
import chekcMark from './Icons/Checkmark.png'

function Popup(props) {
    return (
        <div className="popup fixed inset-0 bg-white bg-opacity-30 backdrop-blur-sm flex items-center justify-center">
            <div className="popup-content p-7 flex flex-col gap-3 items-center rounded-md w-1/2 bg-white text-black drop-shadow-2xl">
                <img src={chekcMark} alt="chekcMark" width="192px" height="192px"/>
                {props.t}
                <button onClick={props.close} className="bg-[#5C54AC] text-white">Fermer</button>
            </div>
        </div>
    );
}

export default Popup;