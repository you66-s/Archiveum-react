import './App.css';
//import Web3 from "web3";
import LandingPage from "./Pages/LandingPage";

function App() {
    //Hooks

    //Connecting to Ethereum
    //const provider = new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545");
    //const instanceWeb3 = new Web3(provider);

    return (
    <div className="App p-7">
        <LandingPage/>
    </div>
  );
}

export default App;
