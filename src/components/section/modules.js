import React, { Component } from "react";
import "./module.css";
const ulStyle = {
  textAlign: "left"
};
class Module extends Component {
  render() {
    return (
      <section>
        <div className="container-fluid bg-light">
          <div className="row m-1">
            <div className="col-sm-12 text-center m-3 py-5" id="courseModule">
              <h4>HOW IT WORK</h4>
              <h5> Learn Distributed Systems</h5>
              <p className="text-muted">
                An introduction to the masterclass and best practices.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4 p-4" style={ulStyle}>
              <h5 className="text-primary">
                Distributed Systems - Introductory Course
              </h5>
              <p className="text-muted">
                Learn fundamentals of Distributed Processing, Distributed Data
                Storage, NoSQL Databases, Microservcies, API Design, and System
                Design
              </p>
              <ul className="list-unstyled">
                <li>
                  <i class="fas fa-hand-point-right text-primary m-2" />
                  <strong>6 Modules, each module 4 hours each</strong>
                </li>
                <li>
                  <i class="fas fa-hand-point-right text-primary m-2" />
                  <strong>
                    Case Study in every module to understand real life
                    application
                  </strong>
                </li>
                <li>
                  <i class="fas fa-hand-point-right text-primary m-2" />
                  <strong>Hands on exercise in each module</strong>
                </li>
              </ul>
              <a href="#syllabusIntroductoryCourse" className="btn btn-primary">
                Course Content
              </a>
            </div>
            <div className="col-sm-4  p-4" style={ulStyle}>
              <h5 className="text-primary">
                Distributed Systems - Intermediate Course
              </h5>
              <p className="text-muted">
                Learn fundamentals of Distributed Processing, Distributed Data
                Storage, NoSQL Databases, Microservcies, API Design, and System
                Design
              </p>
              <ul className="list-unstyled">
                <li>
                  <i class="fas fa-hand-point-right m-2 text-primary" />
                  <strong>9 Modules, each module 4 hours each</strong>
                </li>
                <li>
                  <i class="fas fa-hand-point-right text-primary m-2" />
                  <strong>
                    Case Study in every module to understand real life
                    application
                  </strong>
                </li>
                <li>
                  <i class="fas fa-hand-point-right text-primary m-2" />
                  <strong>Hands on exercise in each module</strong>
                </li>
              </ul>
              <a href="#syllabusIntermediateCourse" className="btn btn-primary">
                Course Content
              </a>
            </div>
            <div className="col-sm-4  p-4" style={ulStyle}>
              <h5 className="text-primary">
                Distributed Systems - Advanced Course
              </h5>
              <p className="text-muted" style={ulStyle}>
                Learn fundamentals of Distributed Processing, Distributed Data
                Storage, NoSQL Databases, Microservcies, API Design, and System
                Design
              </p>
              <ul className="list-unstyled">
                <li>
                  <i class="fas fa-hand-point-right text-primary m-2" />
                  <strong>12 Modules, each module 4 hours each</strong>
                </li>
                <li>
                  <i class="fas fa-hand-point-right text-primary m-2" />
                  <strong>
                    Case Study in every module to understand real life
                    application
                  </strong>
                </li>
                <li>
                  <i class="fas fa-hand-point-right text-primary m-2" />
                  <strong>Hands on exercise in each module</strong>
                </li>
              </ul>
              <a href="#syllabusAdvancedCourse" className="btn btn-primary">
                Course Content
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Module;
