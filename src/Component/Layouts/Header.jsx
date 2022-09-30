import React from 'react'

function Header() {
  return (
  <div>
   
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src="https://safemoon.com/img/logo.svg" alt="" width="15% " />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="hhhhh">
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    <b className="pc">Home</b>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    <b className="pc">Our Team</b>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    <b className="pc">Swap</b>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    <b className="pc">Products</b>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link"href="/">
                    <b className="pc"> Merch</b>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link"href="/">
                    <b className="pc">Partners</b>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    <b className="pc">Markets</b>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    <b className="pc">How to buy</b>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
   
  </div>
  );
}

export default Header
