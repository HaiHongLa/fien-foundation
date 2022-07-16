import React from "react";
import "./Header.css";
import HeaderTop from "./HeaderTop";
import logo from "../../assets/img/fien-logo.png";

const Header = () => {
  return (
    <React.Fragment>
      <HeaderTop />
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
              aria-expanded="false"
              aria-controls="navbar"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>

            <div className="brand-box">
              <a className="navbar-brand" href="/">
                <img id="logo" alt="Brand" src={logo} />
              </a>
              <a id="foundation-name" className="navbar-brand" href="/">
                FIEN Foundation
              </a>
            </div>
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a id="nav-link" href="/">
                  Home
                </a>
              </li>
              <li>
                <a id="nav-link" href="#about-us">
                  About us
                </a>
              </li>
              <li>
                <a id="nav-link" href="/#our-team">
                  Our Team
                </a>
              </li>
              <li>
                <a id="nav-link" href="/careers">
                  Volunteering/Internship
                </a>
              </li>
              <li>
                <a id="nav-link" href="/blog">
                  Students' Stories
                </a>
              </li>
              <li>
                <a id="nav-link" href="/programs">
                  Programs
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Header;
