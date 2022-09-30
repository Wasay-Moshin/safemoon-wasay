import React from "react";
import { BsDiscord } from "react-icons/bs";
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
function Footer() {
  return (
    <div className="container footer">
      <div></div>
      <div className="row">
        <div className="col-md-8 footer1">
          <img
            className="lg"
            src="https://safemoon.com/img/logo.svg"
            alt=""
            width="10%"
          />{" "}
          &nbsp;&nbsp;&nbsp;
          <div className="pc">
            <h3>SafeMoon - Innovating for Good</h3>
            <p>
              Building blockchain, commerce, metaverse and NFT products to
              derive new <br />
              kinds of value from crypto technology and to apply it to
              increasingly better <br />
              use. Advancing our innovations to every part of the world.
            </p>
            <BsDiscord size="40px" color="#28E0D7" /> &nbsp;
            <AiFillFacebook size="40px" color="#28E0D7" /> &nbsp;
            <AiOutlineTwitter size="40px" color="#28E0D7" />
            &nbsp;
            <BsInstagram size="40px" color="#28E0D7" />
            &nbsp;
            <AiFillYoutube size="40px" color="#28E0D7" />
            <AiFillLinkedin size="40px" color="#28E0D7" />
          </div>
        </div>
        <div className="col-md-4">
          <div className="row">
        <div className="col-md-6 col-6 footer1">
          <ul className="list-unstyled pc2">
            <li> Wallet Tracker</li>
            <li>Branding</li>
            <li>White Paper</li>
            <li>Contract</li>
            <li>Status</li>
            <li>SafeMoon Card</li>
          </ul>
        </div>
        <div className="col-md-6 col-6 footer1">
          <ul className="list-unstyled pc2">
            <li>Support</li>
            <li>List a Token</li>
            <li>Careers</li>
            <li>Education</li>
            <li>Wallpaper</li>
          </ul>
        </div>
          </div>
        </div>
        <div className="policy">
          <button type="button" className="btn btn-dark">
            Terms Of Use
          </button>
          <button type="button" className="btn btn-dark">
            Privacy Policy
          </button>
          <button type="button" className="btn btn-dark">
            Cookies Policy
          </button>
          <button type="button" className="btn btn-dark">
            Wallet EULA
          </button>
          <button type="button" className="btn btn-dark">
            Wallet Policy
          </button>
          <button type="button" className="btn btn-dark">
            Disclaimer
          </button>
          <button type="button" className="btn btn-dark">
            FAQ
          </button>
          <button type="button" className="btn btn-dark">
            Our Partners
          </button>
        </div>
        <p className="copyright">
          Copyright © 2022 SafeMoon US LLC | All Rights Reserved !!.
        </p>
      </div>
    </div>
  );
}
export default Footer;
