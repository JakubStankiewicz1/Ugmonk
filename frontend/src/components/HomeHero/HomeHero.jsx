import React from 'react';
import "./homeHero.css";
import assets from '../../assets/assets';
import { BsArrowRight } from "react-icons/bs";

const HomeHero = () => {
  return (
    <div className='homeHero'>
        <div className="homeHeroContainer">
        <div className="homeHeroOverlay" />

            {/* Video Container */}
            <div className="homeHeroContainerVideo">
                <div className="homeHeroContainerVideoContainer">
                    <video
                        src={assets.homeHeroVideo}
                        autoPlay
                        muted
                        loop
                        className="homeHeroVideo"
                    ></video>
                </div>
            </div>

            {/* Text Container */}
            <div className="homeHeroOverlayText">
                <div className="homeHeroOverlayTextContainer">
                    <div className="homeHeroOverlayTextContainerOne">
                        <div className="homeHeroOverlayTextContainerOneContainer">
                            <p className="homeHeroOverlayTextContainerOneContainerTextOne">Break Free From</p>
                            <p className="homeHeroOverlayTextContainerOneContainerTextTwo">Digital Chaos.</p>
                        </div>
                    </div>

                    <div className="homeHeroOverlayTextContainerTwo">
                        <div className="homeHeroOverlayTextContainerTwoContainer">
                            <p className="homeHeroOverlayTextContainerTwoContainerText fontOne">
                                Analog™ helps you prioritize what's important.
                            </p>
                        </div>
                    </div>

                    <div className="homeHeroOverlayTextContainerThree">
                        <div className="homeHeroOverlayTextContainerThreeContainer">
                            <div className="homeHeroOverlayTextContainerThreeContainerLeft">
                                <div className="homeHeroOverlayTextContainerThreeContainerLeftContainer">
                                    <p className="homeHeroOverlayTextContainerThreeContainerLeftContainerText fontOne">
                                        Shop Analog
                                    </p>
                                    <BsArrowRight className='homeHeroOverlayTextContainerThreeContainerLeftContainerIcon' />
                                </div>
                            </div>

                            <div className="homeHeroOverlayTextContainerThreeContainerRight">
                                <div className="homeHeroOverlayTextContainerThreeContainerRightContainer">
                                    <p className="homeHeroOverlayTextContainerThreeContainerRightContainerText fontOne">
                                        Learn More
                                    </p>
                                    <BsArrowRight className='homeHeroOverlayTextContainerThreeContainerRightContainerIcon' />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    </div>
  );
};

export default HomeHero;