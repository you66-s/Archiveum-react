import React, {useState} from 'react';
import NavBar from "../Component/NavBar";
import Buttons from "../Component/Buttons";
function LandingPage() {
    //Hooks
    const [correctNet, setCorrectNet] = useState(false);
    const [LoggedIn, setLoggedIn] = useState(false);
    const [currentAccount, setCurrentAccount] = useState(null);
    //Wallet Connection
    const connectAccount = async () => {
        try {
            const {ethereum} = window;
            if (ethereum) {
                console.log('MetaMask detected')
            } else {
                console.log('MetaMask not detected')
            }
            let chainId = await ethereum.request({method: 'eth_chainId'})
            const ganachID = '0x539';
            if (chainId !== ganachID) {
                alert('not connected to testnet')
                setCorrectNet(false)
            } else {
                setCorrectNet(true)
            }
            const accounts = await ethereum.request({method: 'eth_requestAccounts'})
            console.log("Account Founded", accounts[0])
            setLoggedIn(true)
            setCurrentAccount(accounts[0])
            console.log(currentAccount, LoggedIn, correctNet)
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <div>
            <NavBar link1="Home" link2="Explore" link3="Contact" link4="About us" button={<Buttons value="Connect" func={connectAccount}/>}/>
            <h1>Landing Page</h1>
        </div>
    )
}
export default LandingPage;
