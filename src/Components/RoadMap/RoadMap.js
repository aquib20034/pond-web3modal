import React, {useState, useEffect} from "react";
import './RoadMap.css';
import RoadMapHeading from '../../assets/roadmap.png';
import BlueDoodleRoadMap from '../../assets/bluedoodleRoadMap.gif';
import PurpleDoodleRoadMap from '../../assets/PurpleDoodleRoadMap.gif'

function RoadMap(){
    return(
        <section className="roadMapSection">
            <div className="vectorsRoadMap">
                <img src={BlueDoodleRoadMap} className="BlueDoodleRoadMap"/>
                <img src={PurpleDoodleRoadMap} className="PurpleDoodleRoadMap"/>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="roadMapContent">
                            <img src={RoadMapHeading} className="center-block"/>
                            <p>The roadmap in its current form is divided in to seven different phases and resembles a general plan of action in terms of game development, which is subject to change.</p>
                            <p>With the funding from the NFTS and an increased community and team, we will be able to more thoroughly map and detail the steps of development and set realistic and achievable goals.</p>
                            <p>With this mapping complete, bimonthly development progress will be published.</p>
                            <h4>Press the phases below to reveal more information</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default RoadMap;