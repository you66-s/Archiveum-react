import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createBrowserRouter, RouterProvider, BrowserRouter} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import EspaceDocument from "./Pages/EspaceDocument";
import Profile from "./Pages/Profile";
import SignupPage from "./Pages/SignupPage";
import Contact from "./Pages/Contact/Contact";
import AddDocument from "./Pages/Add document/Ajouter_Document";
import AboutUs from "./Pages/About us/AboutUs";
import ErrorPage from "./Pages/Error Page/errorPage";


const root = ReactDOM.createRoot(document.getElementById('root'));
/*const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <ErrorPage/>
    },
    {
        path: '/docspace',
        element: <EspaceDocument/>,
        errorElement: <ErrorPage/>
    },
    {
        path: '/profile',
        element: <Profile/>,
        errorElement: <ErrorPage/>
    },
    {
        path: '/signup',
        element: <SignupPage/>,
        errorElement: <ErrorPage/>
    },
    {
        path: '/contact',
        element: <Contact/>,
        errorElement: <ErrorPage/>
    },
    {
        path: '/addDoc',
        element: <AddDocument/>,
        errorElement: <ErrorPage/>
    },
    {
        path: '/about',
        element: <AboutUs/>,
        errorElement: <ErrorPage/>
    }
]);*/
/*
<RouterProvider router={router}/>
*/
root.render(


    <BrowserRouter>
        <App/>
    </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
