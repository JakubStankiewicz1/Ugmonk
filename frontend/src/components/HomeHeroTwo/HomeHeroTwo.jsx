import React from 'react';
import "./homeHeroTwo.css";
import assets from '../../assets/assets';
import { BsArrowRight } from "react-icons/bs";

const HomeHeroTwo = () => {
  return (
    <div className='homeHeroTwo'>
        <div className="homeHeroTwoContainer">

            {/* Image Container */}
            <div className="homeHeroTwoContainerImage">
                <div className="homeHeroTwoContainerImageOverlay" /> {/* Nakładka */}
                <div className="homeHeroTwoContainerImageContainer">
                    <img src={assets.homeHeroImage} alt="Home Hero" className='homeHeroTwoContainerImageContainerImage' />
                </div>
            </div>

            {/* Text Container */}
            <div className="homeHeroTwoContainerText">
                <div className="homeHeroTwoContainerTextContainer">
                    <div className="homeHeroTwoContainerTextContainerOne">
                        <p className="homeHeroTwoContainerTextContainerOneTextOne">Introducing</p>
                        <p className="homeHeroTwoContainerTextContainerOneTextTwo">The Gather System</p>
                    </div>

                    <div className="homeHeroTwoContainerTextContainerTwo">
                        <p className="homeHeroTwoContainerTextContainerTwoText">
                            Magnetic organization that streamlines your desk
                        </p>
                    </div>

                    <div className="homeHeroTwoContainerTextContainerThree">
                        <div className="homeHeroTwoContainerTextContainerThreeContainer">
                            <p className="homeHeroTwoContainerTextContainerThreeContainerText">
                                Shop Gather
                            </p>
                            <BsArrowRight className='homeHeroTwoContainerTextContainerThreeContainerTextIcon' />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  );
};

export default HomeHeroTwo;