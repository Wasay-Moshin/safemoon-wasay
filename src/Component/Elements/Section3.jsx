import React from "react";
import { HiUsers } from "react-icons/hi";
import { ImDownload } from "react-icons/im";
import { FaHandHoldingUsd } from "react-icons/fa";
import { BsArrowRightShort } from "react-icons/bs";
function Section3() {
  return (
    <div className="container bg">
      <div className="row">
        <div className="col-md-4">
          <div className="sec31">
            <div className="user">
              <div className="ic-bg">
                <HiUsers size={"40px"} color={"white"} />
              </div>
            </div>

            <div className="community">
              <h3>
                Community <br />
                Focused
              </h3>
              <p>
                Community Focused and fair launch. The dev team burned all of
                their tokens and participated with everyone else.
              </p>
              <h6>
                Join Us <BsArrowRightShort size={"30px"} color={"#28E0D7"} />
              </h6>
            </div>
          </div>
        </div>

        {/* second col */}
        <div className="col-md-4">
          <div className="sec31">
            <div className="user">
              <div className="ic-bg">
                <ImDownload size={"40px"} color={"white"} />
              </div>
            </div>

            <div className="community">
              <h3>Automatic LP</h3>
              <p>
                Every trade contributes towards auto-generating liquidity that
                goes into multiple pools used by exchanges
              </p>
              <h6>
                View BscScan{" "}
                <BsArrowRightShort size={"30px"} color={"#28E0D7"} />
              </h6>
            </div>
          </div>
        </div>

        {/* third col */}
        <div className="col-md-4">
          <div className="sec31">
            <div className="user">
              <div className="ic-bg">
                <FaHandHoldingUsd size={"40px"} color={"white"} />
              </div>
            </div>

            <div className="community">
              <h3>RFI Static Rewards</h3>
              <p>
                Holders earn passive rewards through static reflection as they
                watch their balance of SafeMoon grow indefinitely.
              </p>
              <h6>
                Check Your Wallet{" "}
                <BsArrowRightShort size={"30px"} color={"#28E0D7"} />
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section3;
