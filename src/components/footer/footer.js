import React, { Component } from "react";
const ulStyle = {
  listStyleType: "none",
  marginLeft: "10px"
};
class Footer extends Component {
  render() {
    return (
      <footer className="px-5 bg-dark">
        <div className="container-fluid">
          <div className="row text-light py-4">
            <div className="col-sm-4">
              <h5 className="pb-2">Navigation</h5>
              <ul className="list-unstyle" style={ulStyle}>
                <li className="py-2">
                  <a href="#" className="footer-link">
                    {" "}
                    Support
                  </a>
                </li>
                <li className="py-2">
                  <a href="#" className="footer-link">
                    Contact us
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-sm-4">
              <h5 className="pb-2">Courses</h5>
              <ul className="list-unstyled">
                <li className="py-2">
                  <a href="#" className="footer-link">
                    Distributed Systems - Introductory Course
                  </a>
                </li>
                <li className="py-2">
                  <a href="#" className="footer-link">
                    Distributed Systems - Intermediate Course
                  </a>
                </li>
                <li className="py-2">
                  <a href="#" className="footer-link">
                    Distributed Systems - Advanced Course
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-sm-4">
              <h5 class="pb-3">Company</h5>
              <ul class="list-unstyled" style={ulStyle}>
                <li className="py-2">
                  <a href="#" className="footer-link ">
                    Terms of Service
                  </a>
                </li>
                <li className="py-2">
                  <a href="#" class="footer-link ">
                    Declaimer
                  </a>
                </li>
                <li className="py-2">
                  <a href="#" class="footer-link">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            <div className="row">
              <div className="col-lg text-center text-light border-top pt-3">
                <p>
                  <span>© </span>2019 All Rights Reserved • CodeAthleon
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
