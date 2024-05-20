import React from "react";


function Button(props) {

    return (
        <button
            className="connect-btn w-[130px] h-[40px] border-[3px] border-[#5C54AC] rounded-md hover:bg-[#5C54AC] hover:text-white"
            onClick={props.func}
        >
            {props.value}
        </button>
    )
}
export default Button;