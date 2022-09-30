import React from "react";
import Typed from 'react-typed';
function Hero() {
  return (
   
    <div className="container text-center">
      <div className="row">
        <div className="col">
          <div className="hero1">
            <div className="text-start pc">
              <span>WELCOME TO</span> <br/>
              <span className="type"><Typed
                    strings={['SAFEMOON']}
                    typeSpeed={80}
                /></span><br/>
              <span>Community-driven Innovation for Good</span>
            </div>
            <div className=" hero2"> 
              <button type="button" className="btn1 btn-secondary btn-lg">
                Consolidate to V2 SafeMoon
              </button>
              <button type="button" className="btn2 btn-secondary btn-lg">
                Buy V2
              </button>
              <button type="button" className="btn2 btn-secondary btn-lg">
                Swap
              </button>
            </div>
            <div>
              <button type="button" className="btn2 btn-secondary btn-lg">
                Live Chat
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="hero3">
            <div className="pc text-center">
              <p className="pc safemoon">
                Out Now
                <br />
                <b>SafeMoon</b> <br/>
                Get it on
              </p>
              <div>
                <img src="Assests/google_play.png" alt="" width="30%" />
                <img src="Assests/app_store.png" alt="" width="30%" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   
  );
}

export default Hero;
