import React from "react";
import logo from "../../resources/images/logo.png";
import "./Toolbar.css";
const Toolbar = props => {
  return (
    <section>
      <nav
        className="navbar navbar-expand-sm "
        style={{ backgroundColor: "black" }}
      >
        <div>
          <a className="navbar-brand" href="#">
            <img src={logo} alt="logo" style={{ width: "90px" }} />
          </a>
        </div>
        <div className="mr-auto" style={{ paddingTop: "20px" }}>
          <a className="navbar-brand" href="#" style={{ color: "white" }}>
            <strong>{props.brandName}</strong>
          </a>
        </div>
        <ul className="navbar-nav justify-right">
          <li className="nav-item" style={{ color: "#001530" }}>
            <a
              className="nav-link"
              type="btn btn-primary"
              href="#"
              style={{ color: "white" }}
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#courseModule">
              Courses
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" type="btn btn-primary" href="#faq">
              FaQ
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
};
export default Toolbar;
