import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");

const ALCHEMY_API = process.env.ALCHEMY_API || "";
const DEPLOYER_PRIVATE_KEY = process.env.DEPLOYER_PRIVATE_KEY || "";

module.exports = {
  solidity: "0.8.19",
  networks: {
    localhost: {},
    sepolia: {
      url: ALCHEMY_API, // e.g. https://eth-sepolia.g.alchemy.com/v2/yourKey
      accounts: DEPLOYER_PRIVATE_KEY ? [DEPLOYER_PRIVATE_KEY] : []
    }
  }
};
