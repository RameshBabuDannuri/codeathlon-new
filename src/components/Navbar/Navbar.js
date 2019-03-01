import React, { Component } from "react";
import logo from "../../resources/images/logo.png";

class Navbar extends Component {
  render() {
    return (
      <div className="conatiner-fluid">
        <nav className="navbar navbar-expand-lg navbar-light  ">
          <a className="navbar-brand" href="#">
            <img
              src={logo}
              height="40"
              className="d-inline-block align-top"
              alt="logo"
            />
            <span className="text-primary pt-5">
              Codeathlon Learning Series - Distributed Systems
            </span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link text-primary " href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">
                  Courses
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
