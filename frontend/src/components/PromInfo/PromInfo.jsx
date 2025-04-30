import React from 'react';
import "./promInfo.css";
import { NavLink } from 'react-router-dom';

const PromInfo = ({ number, text, destination }) => {
  return (
    <div className="promInfo">
        <NavLink to={destination} className="promInfoContainer">
            {/* Left Part */}
            <div className="promInfoContainerLeft">
                <div className="promInfoContainerLeftContainer">
                    <p className="promInfoContainerLeftContainerText fontOne">
                        ✨ Up to {number}% Off
                    </p>
                </div>
            </div>

            {/* Right Part */}
            <div className="promInfoContainerRight">
                <div className="promInfoContainerRightContainer">
                    <p className="promInfoContainerRightContainerText fontOne">
                        {text}
                    </p>
                </div>
                <div className="promInfoContainerRightDivLine" />
            </div>
        </NavLink>
    </div>
  )
}

export default PromInfo