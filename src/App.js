// import logo from "./logo.png";

import React, {useState, useEffect} from "react";
import './App.css';
import './Components/Header/Header.css'
import './Components/QualifyMint/QualifyMint.css'
import AboutPondria from './Components/AboutPondria/AboutPondria.js';
import RoadMap from './Components/RoadMap/RoadMap.js';


import {Navbar, Container, NavLink} from 'react-bootstrap';
import logo from './assets/logo.png'
import ApplyForBetaIdle from './assets/aapplybetaidle.png'
import ApplyForBetaPress from './assets/applybetapress.png'
import Community from './assets/community.png'
import FAQ from './assets/FAQ.png'
import LoreWhitePaper from './assets/lorewhitepaper.png'
import ConnectWalletImg from './assets/wallet connect.png'
import DisconnectWalletImg from './assets/wallet disconnect.png'
import { Player } from '@lottiefiles/react-lottie-player';
import headerLeftRock from './assets/headerLeftRock.json';
import headerRightRock from './assets/headerRightRock.json';

// import Button from 'react-bootstrap/Button';
import Web3 from "web3";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import Authereum from "authereum";
import Fortmatic from "fortmatic";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { CONTRACT_ADDRESS, CONTRACT_ABI } from './contract/contract';




import QuailifyMintIdelImg from "./assets/Calltoarmsidle.png";
import QuailifyMintActiveImg from "./assets/Calltoarmsactive.png";
import qualifyFireVector from './assets/qualifyFireVector.json';
import qualifyMintVector from './assets/qualifyMintVector.json';


var contract = null;

function App() {

  
  // Begin :: Header 
      const cId = '0x5';
      const [NavLinkPress, setNavLinkPress] = useState(false);
      const [tx, setTx] = useState(null)
      const [web3Modal, setWeb3Modal] = useState(null)
      const [address, setAddress] = useState("")
      const [balance, setBalance] = useState(false)
      const [chainId, setChainId] = useState()
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
          network:"goerli",
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

      async function changeNetwork() {
        if (window.ethereum) {
          try {
            await window.ethereum.request({
              method: 'wallet_switchEthereumChain',
              params: [{ chainId: Web3.utils.toHex(cId) }]
            })
            setChainId(cId);
          } catch (error) {
            console.error(error);
          }
        }
      }

      // connect wallet
      async function connectWallet() {
      
        console.log("connect wallet")
        var provider = await web3Modal.connect();
        var web3     = new Web3(provider);
        const library = new ethers.providers.Web3Provider(provider);
        const network = await library.getNetwork();
        setChainId(network.chainId);
        console.log("Network Id ",network.chainId);
        

        //  get accounts
        // await window.ethereum.send('eth_requestAccounts');
        await window.ethereum.request({method: 'eth_requestAccounts'});
        
        var accounts = await web3.eth.getAccounts();
                      setAddress(accounts[0]);
        contract     = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
        
        // var _balance   = Number(await contract.methods.balanceOf("0x9cf5cef7a589a9584fbbc061cb425fea8068dcbb").call());
        // var _balance   = Number(await contract.methods.balanceOf(accounts[0]).call()).toString();
        // console.log("_balance", _balance);
        // if(_balance > 0 ){
        //   setBalance(true);
        //   console.log("BAL", balance);
        // }
        

      }

      // disconnectWallet
      async function disconnectWallet(){
        console.log("disconnectWallet");
        web3Modal.clearCachedProvider();
        setAddress("");
        setChainId("");
      }

      //  mint function
      async function mint(e){
        try{
            // console.log("min");
            e.preventDefault();

            if(address){

              console.log("wallet  connected")
              // console.log("auto connect wallet from mint function");
              // connectWallet()
              if(chainId == cId){
                console.log("ChainId is matched", chainId+ " = " +cId )
                // var _mintAmount = Number(document.querySelector("[name=p_amount").value);
                var _mintAmount = 1;
                var _mintRate   = Number(await contract.methods.PUBLIC_SALE_PRICE().call()).toString();
                console.log("mintRate", _mintRate);
                var totalAmount = _mintRate * _mintAmount;
                var record = await contract.methods.mint(_mintAmount).send({
                  from:address,
                  value:String(totalAmount)
                });

                console.log("mint", record);
                setTx("https://goerli.etherscan.io/tx/" + (record.transactionHash));
              }else{
                await changeNetwork();
                // alert("Please switch network to Goreli")
              }
            }else{
              alert("Please connect wallet");
              // console.log("wallet not connected")
            }
        }catch(ex){
          console.log(ex)
        }
      }

      async function hasUserNFt(){
        try{
              var _balance   = Number(await contract.methods.balanceOf().call()).toString();
              console.log("_balance", _balance);
              // var totalAmount = _mintRate * _mintAmount;
              // var record = await contract.methods.mint(_mintAmount).send({
              //   from:address,
              //   value:String(totalAmount)
              // });

              // console.log("mint", record);
              // setTx("https://goerli.etherscan.io/tx/" + (record.transactionHash));
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
  // END :: Header 


  // BEGIN :: QUALIFY-MINT
    const [qualifyMintHove, setQualifyMintHove] = useState(false); 
  // END :: QUALIFY-MINT 
  return (
    <>
      <div className="siteWrap">
        <div className="contentContainer">

          {/* BEGIN :: HEADER */}
            <section className="headerWrap">
              <Navbar collapseOnSelect expand="lg" bg="transparent" variant="light" className="customHeader">
                <Container>
                  <Navbar.Brand href="/">
                    <img src={logo} alt="Realm of Pondria"/>
                  </Navbar.Brand>
                  <div className="headerLeftRock">
                    <Player src={headerLeftRock} loop autoplay/>
                  </div>	
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav" className="navbar-right">
                    <NavLink href="#2" 
                      className={NavLinkPress ? 'navLinks navItems menuItemHovered menuItemActive' : 'navLinks navItems'}
                      onMouseEnter={() => setNavLinkPress(true)}
                      onMouseLeave={() => setNavLinkPress(false)}
                    >
                      <img src={ApplyForBetaPress} className="itemHoverImage" alt="ApplyForBetaPress"/>
                      <img src={ApplyForBetaIdle} className="itemNormalImage" alt="ApplyForBetaIdle"/>
                    </NavLink>
                    <NavLink href="#" className="navLinks navItems">
                      <img src={Community} className="itemNormalImage" alt="Community"/>
                    </NavLink>
                    <NavLink href="#2" className="navLinks navItems" onClick ={connectWallet}>
                      <img src={LoreWhitePaper} className="itemNormalImage" alt="LoreWhitePaper"/>
                    </NavLink>
                    <NavLink href="#" className="navLinks navItems">
                      {  address 
                        ? 
                          <><img src={DisconnectWalletImg} onClick ={disconnectWallet} className="itemNormalImage" alt="ConnectWalletImg"/></> 
                          
                        :  
                          <><img src={ConnectWalletImg} onClick ={connectWallet} className="itemNormalImage" alt="ConnectWalletImg"/></> 
                        }
                        
                      
                    </NavLink>
                    <NavLink href="#2" className="navLinks navItems">
                      <img src={FAQ} className="itemNormalImage" alt="FAQ"/>
                    </NavLink>
                  </Navbar.Collapse>
                  <div className="headerRightRock">
                    <Player src={headerRightRock} loop autoplay/>
                  </div>					
                </Container>
              </Navbar>
            </section>
          {/* END :: HEADER */}

          {/* BEGIN :: QUALIFY-MINT */}

            <section className="bannerContent">
              <div className="container">
                  <div className="row">
                      <div className="col-md-12">
                          <div className="contentWrap text-center">
                              <h2 className="platinoFont">Epic Adventure Awaits</h2>
                              <h4 className="platinoFont">Evil is Rising and the realm is in danger, calling all warriors.</h4>
                              <h4>Join the Call to Arms to qualify for Whitelist and gear up to embark on an epic quest, and restore the piece of the realm.</h4>
                              <div className={`qualifyMintWrap ${qualifyMintHove ? "animationHovered" : ""}`}>
                                  <div>
                                      <Player src={qualifyFireVector} className="qualifyFireVector" autoplay loop/>
                                  </div>
                                  <div>
                                      <Player src={qualifyMintVector} className="qualifyMintVector" autoplay loop/>
                                  </div>

                                  
                                  <button  onClick ={mint} className={`qualifyMintAnchor ${qualifyMintHove ? "hoveredQualifyMint" : ""}`  }
                                      onMouseOver={() => setQualifyMintHove(true)}
                                      onMouseLeave={() => setQualifyMintHove(false)}
                                  >   
                                      <img src={QuailifyMintIdelImg} className="qualifyIdle" alt="QuailifyMintIdelImg"/>
                                      <img src={QuailifyMintActiveImg} className="qualifyActive" alt="QuailifyMintActiveImg"/>
                                  </button>


                                 
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
            </section>

          {/* END :: QUALIFY-MINT */}

          <AboutPondria/>
          <RoadMap/>
        </div>
      </div>
    </>
  );
}
export default App;