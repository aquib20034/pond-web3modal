import React, {useState, useEffect} from "react";
import "./QualifyMint.css";
import QuailifyMintIdelImg from "../../assets/Calltoarmsidle.png";
import QuailifyMintActiveImg from "../../assets/Calltoarmsactive.png";
// import QualifyMint


function QualifyMint(){
const [qualifyMintHove, setQualifyMintHove] = useState(false); 
    return(
        <section className="bannerContent">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="contentWrap text-center">
                            <h2>Epic Adventure Awaits</h2>
                            <h4>Evil is Rising and the realm is in danger, calling all warriors.</h4>
                            <h4>Join the Call to Arms to qualify for Whitelist and gear up to embark on an epic quest, and restore the piece of the realm.</h4>
                            <div className="qualifyMintWrap">

                                <a href="#0" className={`qualifyMintAnchor ${qualifyMintHove ? "hoveredQualifyMint" : ""}`}
                                    onMouseOver={() => setQualifyMintHove(true)}
                                    onMouseLeave={() => setQualifyMintHove(false)}
                                >
                                    <img src={QuailifyMintIdelImg} className="qualifyIdle"/>
                                    <img src={QuailifyMintActiveImg} className="qualifyActive"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default QualifyMint;