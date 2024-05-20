import './App.css';
import { Web3 } from 'web3';

import NavBar from "./Component/NavBar";
import { Route, Routes, useNavigate} from "react-router-dom";
import Buttons from "./Component/Buttons";
import React, {useState} from "react";
import LandingPage from "./Pages/LandingPage";
import EspaceDocument from "./Pages/EspaceDocument";
import SignupPage from "./Pages/SignupPage";
import Contact from "./Pages/Contact/Contact";
import AddDocument from "./Pages/Add document/Ajouter_Document";
import AboutUs from "./Pages/About us/AboutUs";
import ProfileIcon from "./Component/profileIcon";


function App() {
    //Hooks
    function DisplayNavBar(){
        if(LoggedIn){
            return (
                <NavBar link1="Home" link2="Espace Document" link3="Ajouter Document" link4="Contact" link5="About us" button={<ProfileIcon/>}/>
            )
        }else return (<NavBar link1="Home" link2="Espace Document" link3="Ajouter Document" link4="Contact" link5="About us" button={<Buttons value="Connect" func={connectAccount}/>}/>)
    }
    const [LoggedIn, setLoggedIn] = useState(false);
    const [currentAccount, setCurrentAccount] = useState(null);
    const navigate = useNavigate();
    //Wallet Connection
    const connectAccount = async () => {
        try {
            const {ethereum} = window;
            if (ethereum) {
                console.log('MetaMask detected')
            } else {
                console.log('MetaMask not detected')
            }
            //let chainId = await ethereum.request({method: 'eth_chainId'})
            //const ganachID = '0x539';
            const accounts = await ethereum.request({method: 'eth_requestAccounts'})
            setLoggedIn(true)
            console.log("Account Founded", accounts[0])
            setCurrentAccount(accounts[0])
            navigate('/docspace');
            console.log(currentAccount, LoggedIn)
        } catch (e) {
            alert("erreur lors du connexion avec MetaMask")
            setLoggedIn(false)
        }
    }

    //Connecting to Ethereum
    //const provider = new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545");
    //const instanceWeb3 = new Web3(provider);
    //Nav Variation


    return (
        <>
            <div className="App p-7">
                <div className="navbar">
                    <DisplayNavBar/>
                </div>
                <div className="main-Content">
                    <Routes>
                        <Route path="/" element={<LandingPage/>}/>
                        <Route path="/docspace" element={<EspaceDocument/>}/>
                        <Route path="/profile/:userAddress" element={<LandingPage/>}/>
                        <Route path="/signup" element={<SignupPage/>}/>
                        <Route path="/contact" element={<Contact/>}/>
                        <Route path="/addDoc" element={<AddDocument/>}/>
                        <Route path="/about" element={<AboutUs/>}/>
                    </Routes>
                </div>
            </div>
            <div className="Footer bg-[#5C54AC] w-full h-[350px] text-white">
                Footer
            </div>
        </>
    );
}


export default App;
