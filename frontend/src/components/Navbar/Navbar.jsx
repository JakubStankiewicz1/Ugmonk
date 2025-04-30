import React from 'react';
import "./navbar.css";
import { IoSearchSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbarContainer">

        {/* Left Part */}
        <div className="navbarContainerLeft">
          <div className="navbarContainerLeftContainer">
            <div className="navbarContainerLeftContainerLeft">
              <div className="navbarContainerLeftContainerLeftContainer">
                <p className="navbarContainerLeftContainerLeftContainerText fontOne">
                  Ugmonk
                </p>
              </div>
            </div>

            
            
            <div className="navbarContainerLeftContainerRight">
              <div className="navbarContainerLeftContainerRightContainer">


                <div className="navbarContainerLeftContainerRightContainerElement">
                  <div className="navbarContainerLeftContainerRightContainerElementContainer">
                    <div className="navbarContainerLeftContainerRightContainerElementContainerLeft">
                      <div className="navbarContainerLeftContainerRightContainerElementContainerLeftTitle">
                        <p className="navbarContainerLeftContainerRightContainerElementContainerLeftTitleText fontOne">
                          Analog
                        </p>
                      </div>
                    </div>

                    <div className="navbarContainerLeftContainerRightContainerElementContainerRight">
                      <div className="navbarContainerLeftContainerRightContainerElementContainerRightContainer">
                        <div className='navbarContainerLeftContainerRightContainerElementContainerRightContainerDivOne' />
                        <div className='navbarContainerLeftContainerRightContainerElementContainerRightContainerDivTwo' />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="navbarContainerLeftContainerRightContainerElement">
                  <div className="navbarContainerLeftContainerRightContainerElementContainer">
                    <div className="navbarContainerLeftContainerRightContainerElementContainerLeft">
                      <div className="navbarContainerLeftContainerRightContainerElementContainerLeftTitle">
                        <p className="navbarContainerLeftContainerRightContainerElementContainerLeftTitleText fontOne">
                          Gather
                        </p>
                      </div>
                    </div>

                    <div className="navbarContainerLeftContainerRightContainerElementContainerRight">
                      <div className="navbarContainerLeftContainerRightContainerElementContainerRightContainer">
                        <div className='navbarContainerLeftContainerRightContainerElementContainerRightContainerDivOne' />
                        <div className='navbarContainerLeftContainerRightContainerElementContainerRightContainerDivTwo' />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="navbarContainerLeftContainerRightContainerElement">
                  <div className="navbarContainerLeftContainerRightContainerElementContainer">
                    <div className="navbarContainerLeftContainerRightContainerElementContainerLeft">
                      <div className="navbarContainerLeftContainerRightContainerElementContainerLeftTitle">
                        <p className="navbarContainerLeftContainerRightContainerElementContainerLeftTitleText fontOne">
                          Objects
                        </p>
                      </div>
                    </div>

                    <div className="navbarContainerLeftContainerRightContainerElementContainerRight">
                      <div className="navbarContainerLeftContainerRightContainerElementContainerRightContainer">
                        <div className='navbarContainerLeftContainerRightContainerElementContainerRightContainerDivOne' />
                        <div className='navbarContainerLeftContainerRightContainerElementContainerRightContainerDivTwo' />
                      </div>
                    </div>
                  </div>
                </div>


                <div className="navbarContainerLeftContainerRightContainerElementTwo">
                  <div className="navbarContainerLeftContainerRightContainerElementTwoContainer">
                    <p className="navbarContainerLeftContainerRightContainerElementTwoContainerText fontOne">
                      Best Seller
                    </p>
                  </div>
                </div>


              </div>
            </div>



          </div>
        </div>




        {/* Right Part */}
        <div className="navbarContainerRight">
          <div className="navbarContainerRightContainer">
            <div className="navbarContainerRightContainerLeft">
              <div className="navbarContainerRightContainerLeftContainer">
                <p className="navbarContainerRightContainerLeftContainerText fontOne">
                  Shop Analog
                </p>
              </div>
            </div>

            <div className="navbarContainerRightContainerRight">
              <div className="navbarContainerRightContainerRightContainer">

                <div className="navbarContainerRightContainerRightContainerElement">
                  <div className="navbarContainerRightContainerRightContainerElementContainer">
                    <IoSearchSharp className='navbarContainerRightContainerRightContainerElementContainerIconOne' />
                  </div>
                </div>

                <div className="navbarContainerRightContainerRightContainerElement">
                  <div className="navbarContainerRightContainerRightContainerElementContainer">
                    <FaUser className='navbarContainerRightContainerRightContainerElementContainerIconTwo' />
                  </div>
                </div>

                <div className="navbarContainerRightContainerRightContainerElement">
                  <div className="navbarContainerRightContainerRightContainerElementContainer">
                    <FaShoppingCart className='navbarContainerRightContainerRightContainerElementContainerIconThree' />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>




      </div>
    </div>
  )
}

export default Navbar