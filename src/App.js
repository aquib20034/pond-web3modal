// import logo from "./logo.png";
import React, {useState, useEffect} from "react";
import './App.css';
import Header from './Components/Header/Header.js';
import QualifyMint from './Components/QualifyMint/QualifyMint.js';

function App() {
  return (
    <>
      <div class="siteWrap">
        <Header/>
        <QualifyMint/>
      </div>
    </>
  );
}
export default App;