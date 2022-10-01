import React from "react";

function Section1() {
  return (
    <div className="container ">
      <div className="row">
        <div className="col-md-6">
          <div className="section1">
            <span className=" text-start about">About Us</span>
            <h4 className="pc">
              A human-focused technology and <br />
              innovation business expanding <br />
              blockchain technologies for a <br />
              brighter tomorrow.
            </h4>
            <p className="pc">
              Deeply connected to and driven by our award winning community (The
              SafeMoon Army), we are innovating for good. Building blockchain,
              commerce, metaverse and NFT products to derive new kinds of value
              from crypto technology and to apply it to increasingly better use.
            </p>
            <br />
            <p className="pc">
              We are now addressing the second part of our mission – the
              expansion and channeling of our technology to propel new
              innovations for good, and a Venture Philanthropy model to advance
              those innovations to every part of the world.
            </p>
          </div>
        </div>
        {/* <div className=" col-md-1"></div> */}
        <div className=" col-md-6">
          <div className="sec21">
            <img
              className="im1"
              width={"400px"}
              src="Assests/V6.jpg"
              alt="V6"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1;
