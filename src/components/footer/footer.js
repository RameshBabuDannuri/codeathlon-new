import React, { Component } from "react";

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer class="px-5" style={{ backgroundColor: "#171b2b" }}>
        <div class="container-fluid">
          <div class="row text-light py-4">
            <div class="col-sm-6">
              <h5 class="pb-3">Visit Us</h5>
              <ul class="list-unstyled">
                <li className="py-2">
                  <a href="#" class="footer-link">
                    Course
                  </a>
                </li>
                <li className="py-2">
                  <a href="#" class="footer-link">
                    Support
                  </a>
                </li>
                <li className="py-2">
                  <a href="#" class="footer-link">
                    Contact us
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-sm-6">
              <h5 class="pb-3">Company</h5>
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
                <li className="py-2">
                  <a href="#" class="text-info text-light">
                    photox@email.com
                  </a>
                </li>
              </ul>
            </div>

            <div class="row">
              <div class="col text-center text-light border-top pt-3">
                <p> © 2019 All Rights Reserved • CodeAthleon</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
