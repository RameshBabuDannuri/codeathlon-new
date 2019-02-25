import React from "react";
import logo from "../../resources/images/logo.png";
const Toolbar = props => {
  return (
    <section>
      <nav className="navbar navbar-expand-sm ">
        <div>
          <a className="navbar-brand" href="#">
            <img src={logo} alt="logo" style={{ width: "70px" }} />
          </a>
        </div>
        <div style={{ paddingTop: "20px" }}>
          <a className="navbar-brand" href="#">
            <strong>{props.brandName}</strong>
          </a>
        </div>
        <ul className="navbar-nav justify-right">
          <li className="nav-item">
            <a className="nav-link text-dark" type="btn btn-primary" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark" href="#courseModule">
              Courses
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
};
export default Toolbar;
