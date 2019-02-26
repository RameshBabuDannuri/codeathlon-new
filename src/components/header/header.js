import React from "react";
import "./header.css";
import distsys from "../../resources/images/distsys.png";
import distributed from "../../resources/images/distributed.png";
const imgstyle = {
  width: "600px",
  height: "auto",
  marginLeft: "30px"
};
const Header = props => {
  return (
    <section>
      <div className="conatiner-fluid">
        <div className="hero-image" style={{ backgroundColor: "#001530" }}>
          <div
            className="hero-text ml-3"
            style={{ textAlign: "left", paddingTop: "2em" }}
          >
            <h2 className="banner-heading display-4">{props.header}</h2>
            <p className="banner-paragraph">{props.paragraph}</p>
            <button className="btn btn-warning text-light">Sign up</button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Header;
