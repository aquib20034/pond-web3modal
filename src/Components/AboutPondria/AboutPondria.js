import React from "react";
import "./AboutPondria.css";
import HeadingImage from '../../assets/whatisrop.png';
import {Player} from "@lottiefiles/react-lottie-player";
import sectionMontains from '../../assets/sectionMontains.json';
import aboutTreeImg from '../../assets/aboutTreeImg.json';
import AboutImageRight from '../../assets/AboutImageRight.json';

function AboutPondria(){
    return(
        <section className="AboutContent">
            <div className="sectionMontains">
                <Player src={sectionMontains} loop autoplay/>
            </div>
            <div className="aboutTreeImg">
                <Player src={aboutTreeImg} loop autoplay/>
            </div>	
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="sectionHeading text-center"><img src={HeadingImage} className="headingImage center-block" alt="About"/></div>
                    </div>
                    <div className="col-md-8">
                        <div className="aboutContentArea text-center">
                            <p><b>Realm of Pondria (ROP)</b> is an <b>indie game project</b> directly funded, shaped and driven by NFT Culture and community.</p>
                            <p><b>Forged from a bullish vision</b>, Realm of Pondria aspire to build a renowned <b>Web3 Brand</b> and its own <b>Open-World Metaverse</b>.</p>
                            <p><b>Set in a unique fantasy world with rich and exciting lore, ROP will develop two games:</b></p>
                            <p>A classic <b>2D turn-based RPG App Game</b>, featuring PvP and PvE with content inspired from the <b>classic roots of RPG gaming</b>.</p>
                            <p>The <b>second game</b> is a long-term development of a <b>large and immersive MMORPG</b> full of epic adventure, unique monsters and Player vs Player combat.</p>
                            <p>As a genesis to the development of this fantasy world, a series of NFT launches will introduce the world of Pondria.</p>
                            <p>The first official NFT Launch (date TBA) will feature <b>4444 battle- frogs</b> introducing the <b>Woodland</b>, <b>Desert</b>, <b>Fire</b> and <b>Mystic Tribes</b> in ascending rarity.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="aboutVectorsArea">
                            <div className="AboutImageRight">
                                <Player src={AboutImageRight} loop autoplay/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default AboutPondria;