import React from "react";
import './RoadMap.css';
import RoadMapHeading from '../../assets/roadmap.png';
import { Player } from '@lottiefiles/react-lottie-player';
import BlueDoodleRoadMap from '../../assets/BlueDoodleRoadMap.json'
import PurpleDoodleRoadMap from '../../assets/PurpleDoodleRoadMap.json'
import phaseOne from '../../assets/phaseOne.png';
import phaseTwo from '../../assets/phaseTwo.png';
import phaseThree from '../../assets/phaseThree.png';
import phaseFour from '../../assets/phaseFour.png';
import phaseFive from '../../assets/phaseFive.png';
import phaseSix from '../../assets/phaseSix.png';
import phaseSeven from '../../assets/phaseSeven.png';
import footerDoodle from '../../assets/footer.json';
import chrisP from '../../assets/chrisp.png';
import chrisH from '../../assets/chrish.png';
import thomasS from '../../assets/foundericon.png';
import forMore from '../../assets/moreIcon.png';
import geeksRoot from '../../assets/geeksroot.png';
import founder from '../../assets/founder.png';
import dev from '../../assets/webdevs.png';
import cofounder from '../../assets/cofounder.png';
import teamHeading from '../../assets/team.png';

function RoadMap(){
    return(
        <>
        <section className="roadMapSection">
            <div className="vectorsRoadMap">
                <Player src={BlueDoodleRoadMap} loop autoplay className="BlueDoodleRoadMap"/>
                <Player src={PurpleDoodleRoadMap} loop autoplay className="PurpleDoodleRoadMap"/>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="roadMapContent">
                            <img src={RoadMapHeading} className="center-block" alt="RoadMapHeading"/>
                            <p>The roadmap in its current form is divided in to seven different phases and resembles a general plan of action in terms of game development, which is subject to change.</p>
                            <p>With the funding from the NFTS and an increased community and team, we will be able to more thoroughly map and detail the steps of development and set realistic and achievable goals.</p>
                            <p>With this mapping complete, bimonthly development progress will be published.</p>
                            <h4>Press the phases below to reveal more information</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="footerWrapper">
            <section className="phaseSection">
                <Player loop autoplay src={footerDoodle} className="footerDoodle"/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="phasesParent">
                                <img src={phaseOne} alt='phaseOne' className="phase phaseOne"/>
                                <img src={phaseTwo} alt='phaseTwo' className="phase phaseTwo"/>
                                <img src={phaseThree} alt='phaseThree' className="phase phaseThree"/>
                                <img src={phaseFour} alt='phaseFour' className="phase phaseFour"/>
                                <img src={phaseFive} alt='phaseFive' className="phase phaseFive"/>
                                <img src={phaseSix} alt='phaseSix' className="phase phaseSix"/>
                                <img src={phaseSeven} alt='phaseSeven' className="phase phaseSeven"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="teamSection">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <img src={teamHeading} className="teamHeadingImage" alt="teamHeading"/>
                        </div>
                        <div className="col-md-4 topMargin">
                            <div className="teamBlock">
                                <img src={cofounder} className="teamHeading" alt="team vectors"/>
                                <img src={chrisP} className="teamHeading" alt="team vectors"/>
                                <h4 className="teamTitle text-center">
                                    Chris P.<br/>@GrotesqueChris
                                </h4>
                            </div>
                            <div className="teamBlock">
                                <h5 className="textMoreFor">Looking For More!</h5>
                                <a href="#0"><img src={forMore} className="teamHeading" alt="team vectors"/></a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="teamBlock">
                                <img src={founder} className="teamHeading" alt="team vectors"/>
                                <img src={thomasS} className="teamHeading" alt="team vectors"/>
                                <p>Artist, Creative Director,<br/>Loremaster</p>
                                <h4 className="teamTitle text-center">
                                    Thomas S.<br/>@GrotesqueChris
                                </h4>
                            </div>
                            <div className="teamBlock">
                                <img src={dev} className="teamHeading" alt="team vectors"/>
                                <a href="https://geeksroot.com" target="_blank" rel="noreferrer"><img src={geeksRoot} className="teamHeading" alt="GeeksRoot"/></a>
                            </div>
                        </div>
                        <div className="col-md-4 topMargin">
                            <div className="teamBlock">
                                <img src={cofounder} className="teamHeading" alt="team vectors"/>
                                <img src={chrisH} className="teamHeading" alt="team vectors"/>
                                <h4 className="teamTitle text-center">
                                    Chris H.<br/>@ChrisHKong
                                </h4>
                            </div>
                            <div className="teamBlock">
                                <h5 className="textMoreFor">Looking For More!</h5>
                                <a href="#0"><img src={forMore} className="teamHeading" alt="team vectors"/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>    
        </section> 
        </>
    );
}
export default RoadMap;