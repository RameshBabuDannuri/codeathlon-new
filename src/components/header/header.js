import React from "react";
import "./header.css";
const image = {
  height: "100vh",
  minWidth: "90vh",
  width: "inherit"
};
const Header = props => {
  return (
    <div className="conatiner-fluid">
      <div className="row">
        <div className="col-sm-5 text-left headerDiv pl-5">
          <h2
            className="banner-heading headerH1 text-dark"
            style={{ paddingTop: "200px" }}
          >
            {props.header}
          </h2>
          <p className="banner-paragraph">{props.paragraph}</p>
          <button className="btn btn-primary">Sign up</button>
        </div>
        <div className="col-sm-6 header-image ml-auto" style={image} />
      </div>
    </div>
  );
};
export default Header;
