import React from 'react';
import "./theGatherCollection.css";
import { BsArrowRight } from "react-icons/bs";

const TheGatherCollection = () => {
  return (
    <div className='theGatherCollection'>
        <div className="theGatherCollectionContainer">
            {/* Top Part */}
            <div className="theGatherCollectionContainerTop">
                <div className="theGatherCollectionContainerTopContainer">
                    <p className="theGatherCollectionContainerTopContainerText">
                        The Gather Collection
                    </p>
                </div>
            </div>

            {/* Bottom Part */}
            <div className="theGatherCollectionContainerBottom">
                <div className="theGatherCollectionContainerBottomContainer">




                    {/* Products Container */}
                    <div className="theGatherCollectionContainerBottomContainerProducts">
                        <div className="theGatherCollectionContainerBottomContainerProductsContainer">

                            {/* Row Container */}
                            <div className="theGatherCollectionContainerBottomContainerProductsContainerRow">
                                <div className="theGatherCollectionContainerBottomContainerProductsContainerRowContainer">





                                    


























                                </div>
                            </div>

                        </div>
                    </div>





                    
                    
                    
                    {/* Button Container */}
                    <div className="theGatherCollectionContainerBottomContainerButton">
                        <div className="theGatherCollectionContainerBottomContainerButtonContainer">
                            <p className="theGatherCollectionContainerBottomContainerButtonContainerText fontOne">
                                Shop All Gather
                            </p>

                            <BsArrowRight className='theGatherCollectionContainerBottomContainerButtonContainerIcon' />
                        </div>
                    </div>


                </div>
            </div>
        </div>
    </div>
  )
}

export default TheGatherCollection