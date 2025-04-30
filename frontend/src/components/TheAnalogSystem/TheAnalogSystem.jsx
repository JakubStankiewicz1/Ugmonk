import React from 'react';
import "./theAnalogSystem.css";
import products from '../../assets/products.json';
import assets from '../../assets/assets';
import { BsArrowRight } from "react-icons/bs";

const TheAnalogSystem = () => {
  return (
    <div className="theAnalogSystem">
        <div className="theAnalogSystemContainer">
            {/* Top Part */}
            <div className="theAnalogSystemContainerTop">
                <div className="theAnalogSystemContainerTopContainer">
                    <p className="theAnalogSystemContainerTopContainerText">
                        The Analog System
                    </p>
                </div>
            </div>

            {/* Bottom Part */}
            <div className="theAnalogSystemContainerBottom">
                <div className="theAnalogSystemContainerBottomContainer">
                    {products.products.map((product, index) => {
                        const imageDefault = assets[product.images[0]];
                        const imageHover = assets[product.images[1]];

                        return (
                            <div key={index} className="productCard">
                                <div className="productCardImage">
                                    <img
                                        src={imageDefault}
                                        className="productCardImageDefault"
                                    />
                                    <img
                                        src={imageHover}
                                        alt={product.Title}
                                        className="productCardImageHover"
                                    />
                                </div>

                                <div className="productCardDataLeft">
                                    <div className="productCardDataLeftContainer" style={{ backgroundColor: product.leftCornerInfoColor, paddingLeft: "15px", paddingRight: "15px", paddingTop: "4px", paddingBottom: "4px", borderRadius: "100px" }}>
                                        <p className="productCardDataLeftContainerText fontOne">
                                            {product.leftCornerInfo}
                                        </p>
                                    </div>
                                </div>

                                {/* <div className="productCardDataRight">
                                    <div className="productCardDataRightContainer">
                                        <p className="productCardDataRightContainerText fontOne">
                                            {product.rightCornerInfo}
                                        </p>
                                    </div>
                                </div> */}


                                <div className="productCardInfo">
                                    <div className="productCardInfoOne">
                                        <p className="productCardTitle fontOne">{product.Title}</p>
                                        <p className="productCardDescription fontOne">{product.TitleExtra}</p>
                                    </div>

                                    <div className="productCardInfoTwo">
                                    <p className="productCardPrice fontOne">${product.price.toFixed(2)}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>




                {/* Shop All Analog Button */}
                <div className="theAnalogSystemContainerBottomButton">
                    <div className="theAnalogSystemContainerBottomButtonContainer">
                        <p className="theAnalogSystemContainerBottomButtonContainerText fontOne">
                            Shop All Analog
                        </p>

                        <BsArrowRight className='homeHeroOverlayTextContainerThreeContainerLeftContainerIcon' />
                    </div>
                </div>



            </div>
        </div>
    </div>
  );
};

export default TheAnalogSystem;