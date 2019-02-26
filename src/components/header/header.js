import React from "react";
import "./header.css";
import distsys from "../../resources/images/distsys.png";
const imgstyle = {
  width: "600px",
  height: "auto",
  marginLeft: "30px"
};
const Header = props => {
  return (
    <section>
      <div className="conatiner-fluid">
        <div className="row">
          <div
            className="col-sm-5 ml-5"
            style={{ textAlign: "left", paddingTop: "10em" }}
          >
            <h2 className="banner-heading">{props.header}</h2>
            <p className="banner-paragraph">{props.paragraph}</p>
            <button className="btn btn-primary ">
              <a href="#" alt="buy" />
              Sign Up
            </button>
            <br />
          </div>
          <div className=" col-md">
            <div className="jumbotron-fluid ml-3">
              <img className="responsive" src={distsys} style={imgstyle} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Header;
