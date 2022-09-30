import React from "react";
import { FaCat } from "react-icons/fa";

function Section2() {
  return (
    <div className="container text-center ">
      <div className="row">
        <div className="col-md-6">
          <div className="sec2">
            <span className="pc token">The Token</span>

            <b className="text-start pc">
              The SafeMoon Protocol V2 is a <br />
              community focused DeFi token that <br />
              forms part of the expanding <br />
              SafeMoon ecosystem.
            </b>

            <p className="text-start pc">
              Four simple functions occur during each trade
            </p>
            <br />
            <ul className="list-unstyled">
              <div
                className="cat"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
              >
                <div>
                  <FaCat size={"45px"} color="#28E0D7" /> &nbsp;
                </div>
                <div>
                  <li className="text-start pc">
                    <b>
                      Reflections <br />
                      4% is Redistributed to all existing holders
                    </b>
                  </li>
                </div>
              </div>
              <br />
              <div
                className="cat"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
              >
                <div>
                  <FaCat size={"45px"} color="#28E0D7" /> &nbsp;
                </div>
                <li className="text-start pc">
                  <b>LP Acquisition</b> <br />
                  <b>3% is added to liquidity</b>
                </li>
              </div>

              <br />
              <div
                className="cat"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
              >
                <div>
                  <FaCat size={"45px"} color="#28E0D7" /> &nbsp;
                </div>
                <div>
                  <li className="text-start pc">
                    <b>Token Burn</b> <br />
                    <b>2% of tokens are burned</b>
                  </li>
                </div>
              </div>
              <br />
              <div
                className="cat"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
              >
                <div>
                  <FaCat size={"45px"} color="#28E0D7" /> &nbsp;
                </div>
                <div>
                  <li className="text-start pc">
                    <b>Growth Fund</b> <br />
                    <b>1% is added to the SafeMoon Ecosystem Growth Fund</b>
                  </li>
                </div>
              </div>
            </ul>
          </div>
        </div>
        <div className=" col-md-6">
          <div className="sec21">
            <img
              className="im2 img-fluid"
              src="Assests/spaceman-stars.png"
              alt=""
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;
