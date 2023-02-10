// import logo from "./logo.png";
import React from "react";
import './App.css';
import Header from './Components/Header/Header.js';
import QualifyMint from './Components/QualifyMint/QualifyMint.js';
import AboutPondria from './Components/AboutPondria/AboutPondria.js';
import RoadMap from './Components/RoadMap/RoadMap.js';
function App() {
  return (
    <>
      <div className="siteWrap">
        <div className="contentContainer">
          <Header/>
          <QualifyMint/>
          <AboutPondria/>
          <RoadMap/>
        </div>
      </div>
    </>
  );
}
export default App;