import React from 'react';
import "./theAnalogSystem.css";
import products from '../../assets/products.json';
import assets from '../../assets/assets';

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

                        // Debugging: Log image paths
                        console.log(`Default Image: ${imageDefault}, Hover Image: ${imageHover}`);

                        return (
                            <div key={index} className="productCard">
                                <div className="productCardImage">
                                    <img
                                        src={imageDefault}
                                        // alt={product.Title}
                                        className="productCardImageDefault"
                                    />
                                    <img
                                        src={imageHover}
                                        alt={product.Title}
                                        className="productCardImageHover"
                                    />
                                </div>
                                <div className="productCardInfo">
                                    <div className="productCardInfoOne">
                                        <p className="productCardTitle fontOne">{product.Title}</p>
                                        <p className="productCardDescription fontOne">{product.TitleExtra}</p>
                                    </div>

                                    <div className="productCardInfoTwo">
                                    <p className="productCardPrice fontOne">${product.price.toFixed(2)}</p>
                                    </div>
                                    {/* <p className="productCardTitle fontOne">{product.Title}</p> */}
                                    {/* <p className="productCardPrice fontOne">${product.price.toFixed(2)}</p> */}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    </div>
  );
};

export default TheAnalogSystem;