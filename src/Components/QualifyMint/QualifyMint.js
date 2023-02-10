import React, {useState} from "react";
import "./QualifyMint.css";
import QuailifyMintIdelImg from "../../assets/Calltoarmsidle.png";
import QuailifyMintActiveImg from "../../assets/Calltoarmsactive.png";
import {Player} from "@lottiefiles/react-lottie-player";
import qualifyFireVector from '../../assets/qualifyFireVector.json';
import qualifyMintVector from '../../assets/qualifyMintVector.json';


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
                            <div className={`qualifyMintWrap ${qualifyMintHove ? "animationHovered" : ""}`}>
                                <div>
                                    <Player src={qualifyFireVector} className="qualifyFireVector" autoplay loop/>
                                </div>
                                <div>
                                    <Player src={qualifyMintVector} className="qualifyMintVector" autoplay loop/>
                                </div>
                                <a href="#0" className={`qualifyMintAnchor ${qualifyMintHove ? "hoveredQualifyMint" : ""}`}
                                    onMouseOver={() => setQualifyMintHove(true)}
                                    onMouseLeave={() => setQualifyMintHove(false)}
                                >   
                                    <img src={QuailifyMintIdelImg} className="qualifyIdle" alt="QuailifyMintIdelImg"/>
                                    <img src={QuailifyMintActiveImg} className="qualifyActive" alt="QuailifyMintActiveImg"/>
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