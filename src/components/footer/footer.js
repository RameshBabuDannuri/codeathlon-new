import React, { Component } from "react";
const divStyle = {
  color: "white",
  backgroundColor: "#1F2833"
};
const h5Style = {
  color: "#FFC700"
};
class Footer extends Component {
  state = {};
  render() {
    return (
      <footer class="px-5" style={{ backgroundColor: "#1F2833" }}>
        <div class="container-fluid">
          <div class="row text-light py-4">
            <div class="col-sm-6">
              <h5 class="pb-2" style={h5Style}>
                Visit Us
              </h5>
              <ul class="list-unstyled">
                <li className="py-2">
                  <a href="#" class="footer-link" style={divStyle}>
                    Course
                  </a>
                </li>
                <li className="py-2">
                  <a href="#" class="footer-link" style={divStyle}>
                    Support
                  </a>
                </li>
                <li className="py-2">
                  <a href="#" class="footer-link" style={divStyle}>
                    Contact us
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-sm-6">
              <h5 class="pb-3" style={h5Style}>
                Company
              </h5>
              <ul class="list-unstyled">
                <li className="py-2">
                  <a href="#" className="footer-link text-light py-2 ">
                    Terms of Service
                  </a>
                </li>
                <li className="py-2">
                  <a href="#" class="footer-link text-light ">
                    Declaimer
                  </a>
                </li>
                <li className="py-2">
                  <a href="#" class="footer-link text-light">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            <div className="row">
              <div className="col-lg text-center text-light border-top pt-3">
                <p>
                  {" "}
                  <span style={h5Style}>© </span>2019 All Rights Reserved •
                  CodeAthleon
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
