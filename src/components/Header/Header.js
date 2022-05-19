import React from "react";
import "./Header.css";
import HeaderTop from "./HeaderTop";
import logo from "../../assets/img/fien-logo.png";
import Intro from "./Intro";

const Header = () => {
  return (
    <React.Fragment>
      <HeaderTop />
      <nav class="navbar navbar-default">
        <div class="container-fluid">
          <div class="navbar-header">
            <button
              type="button"
              class="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
              aria-expanded="false"
            >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <div className="brand-box">
              <a class="navbar-brand" href="#">
                <img id="logo" alt="Brand" src={logo} />
              </a>
              <a id="foundation-name" class="navbar-brand" href="#">
                FIEN Foundation
              </a>
            </div>
          </div>

          <div
            class="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul class="nav navbar-nav"></ul>
            <ul class="nav navbar-nav navbar-right">
              <li>
                <a id="nav-link" href="#">
                  Home
                </a>
              </li>
              <li>
                <a id="nav-link" href="#">
                  About us
                </a>
              </li>
              <li>
                <a id="nav-link" href="#">
                  Our Team
                </a>
              </li>
              <li>
                <a id="nav-link" href="#">
                  Volunteering/Internship
                </a>
              </li>
              <li>
                <a id="nav-link" href="#">
                  Students' Stories
                </a>
              </li>

              <li>
                <a id="nav-link" href="#">
                  Programs
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Intro />
    </React.Fragment>
  );
};

export default Header;
