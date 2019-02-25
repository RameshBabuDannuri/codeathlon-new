import React from "react";
import "./header.css";
import distsys from "../../resources/images/distsys.png";
const Header = props => {
  return (
    <section>
      <div className="conatiner-fluid">
        <div className="row">
          <div
            className="col-md-6"
            style={{ textAlign: "left", paddingTop: "10em" }}
          >
            <h2>{props.header}</h2>
            <p className="">{props.paragraph}</p>
            <button className="btn btn-primary ">
              <a href="#" alt="buy" />
              Sign Up
            </button>
            <br />
          </div>
          <div className=" col-md-6">
            <div className="jumbotron-fluid">
              <img src={distsys} style={{ width: "500px", height: "auto" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Header;
