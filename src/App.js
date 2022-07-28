import logo from "./logo.png";
import './App.css';
import React, {useState, useEffect} from "react";

import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Web3 from "web3";
import Web3Modal from "web3modal";
import Authereum from "authereum";
import Fortmatic from "fortmatic";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { CONTRACT_ADDRESS, CONTRACT_ABI } from './contract/contract';


var contract = null;


function App() {
  
  const [tx, setTx] = useState(null)
  const [web3Modal, setWeb3Modal] = useState(null)
  const [address, setAddress] = useState("")
  // console.log(account);

  useEffect(() => {
    // initiate web3modal
    const providerOptions = {
      walletconnect: {
        package: WalletConnectProvider, // required
        options: {
          infuraId: "1330591d388d44649dacdba4176f4643" // required
        }
      },
      authereum: {
        package: Authereum // required
      },

      fortmatic: {
        package: Fortmatic,
        options: {
          // Mikko's TESTNET api key
          key: "pk_test_391E26A3B43A3350"
        }
      }
    };

    const newWeb3Modal = new Web3Modal({
      network:"kovan",
      theme:"dark",
      providerOptions,
      cacheProvider: true, // optional
      disableInjectedProvider: false, // optional. For MetaMask / Brave / Opera.
    });

    setWeb3Modal(newWeb3Modal)

  }, []);

  useEffect(() => {
    // connect automatically and without a popup if user is already connected
    if(web3Modal && web3Modal.cachedProvider){
      console.log("auto connect wallet");
      connectWallet()
    }
  }, [web3Modal])

  async function connectWallet() {
  
    console.log("connect wallet")
    var provider = await web3Modal.connect();
    var web3     = new Web3(provider);
    

    //  get accounts
    await window.ethereum.send('eth_requestAccounts');
    var accounts = await web3.eth.getAccounts();
                   setAddress(accounts[0]);
    contract     = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);


  }

  // disconnectWallet
  async function disconnectWallet(){
    console.log("disconnectWallet");
    web3Modal.clearCachedProvider();
    setAddress("");
  }

  
  //  mint function
  async function mint(){
    try{
          var _mintAmount = Number(document.querySelector("[name=p_amount").value);
          var _mintRate   = Number(await contract.methods.PUBLIC_SALE_PRICE().call()).toString();
          console.log("mintRate", _mintRate);
          var totalAmount = _mintRate * _mintAmount;
          var record = await contract.methods.mint(_mintAmount).send({
            from:address,
            value:String(totalAmount)
          });

          console.log("mint", record);
          setTx("https://kovan.etherscan.io/tx/" + (record.transactionHash));
    }catch(ex){
      console.log(ex)
    }
  }


  //  whitelist_mint function
  async function whitelist_mint(){
    try{
          var _mintAmount = Number(document.querySelector("[name=wl_amount").value);
          var _mintRate   = Number(await contract.methods.WHITELIST_SALE_PRICE().call()).toString();
          console.log("mintRate", _mintRate);
          var totalAmount = _mintRate * _mintAmount;
          contract.methods.mint(_mintAmount).send({
            from:address,
            value:String(totalAmount)
          })
    }catch(ex){
      console.log(ex)
    }
  }
  
  return (
    <div className="App">

    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
        <img src={logo} style={{width:100}} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
            
          </Nav>
          <Nav style={{color:"white", marginRight:"10px"}} >
            <h6> {address}</h6>
          </Nav>
          <Nav>
            {  address 
              ? 
                <>{ <Button onClick ={disconnectWallet} variant="danger" style={{marginBottom:"5px"}}>Disconnect  Wallet</Button> }</>  
              :  
                <>{ <Button onClick ={connectWallet} style={{marginBottom:"5px"}}>Connect Wallet</Button> }</> 
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
      <div className='container'>
        <div className='row mt-3'>
          <div className='col-lg-12 p-3' style={{padding:"15px", borderRadius:"5px",boxShadow:"1px 1px 5px #C9C9C9"}}>
            <h3 style={{color: "#424242"}}>What is Pond</h3><hr />
            <p>The Pond is an original collection of NFTs featuring heroic battlefrogs fighting with glory to maintain peace in the realm of Pondria.</p>
            <p>The NFT collection will consist of five launches of 2222 frogs, with gear and weapons unique to the different launches.</p>
            <p>The Pond aspires beyond just NFTs, and is to become and RPG online Game, as well as being rendered for use in the Metavers.. </p>
            {/* <h4 style={{color: "#424242"}}>Mint Portal</h4> */}
          </div>
        </div>
        
        {  address 
              ? 
                <> {
                    <div className='row mt-3'>
                      <div className='col p-5' style={{borderRadius:"5px", boxShadow:"1px 1px 5px #C9C9C9", marginRight:"6px"}}>
                        <input className="form-control" type="number" name ="p_amount" defaultValue="1" min="1" max="5" />
                        <label>Public Mint Price 0.00009 Eth for each mint.</label> <br />
                        <Button onClick ={mint} >Public Mint</Button>
                      </div>
                    </div>
                   }
                </> : ""
        }

        
        {  tx 
              ? 
                <> {
                    <div className='row mt-3'>
                      <div className='col-lg-12 p-3' style={{borderRadius:"5px",boxShadow:"1px 1px 5px #C9C9C9"}}>
                        <a href={tx} target="_blank">Your Transaction: {tx}</a>
                      </div>
                    </div>

                  }
                </> 
              : ""
        }
      </div>
    </div>
  );
}

export default App;