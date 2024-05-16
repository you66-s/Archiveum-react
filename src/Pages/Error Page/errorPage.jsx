import React from 'react';
import errorPage from './Icons/Oops.png';
import { Link } from "react-router-dom";
function ErrorPage(props) {
    return (
        <div className="flex flex-col gap-2 w-full items-center">
            <img src={errorPage} alt="Error Page" width="500px" height="500px" />
            <p className="text-center text-sm">Oops! We can't seem to find the page you're looking for.</p>
            <button className="">
                <Link to="/">Go Back</Link>
            </button>
        </div>
    );
}

export default ErrorPage;