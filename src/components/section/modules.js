import React, { Component } from "react";
import "./module.css";

class Module extends Component {
  render() {
    const couser1style = {
      color: "#FFC700"
    };
    const course2tyle = {
      color: "#FFC700"
    };
    const course3tyle = {
      color: "#FFC700"
    };
    const headerStyle = {
      color: "#FFC700"
    };
    const ulStyle = {
      textAlign: "left"
    };
    const liStyle = {
      color: "white"
    };
    const btnStyle = {
      backgroundColor: "#FFC700",
      color: "white"
    };
    const courseIconStyle = {
      fontSize: "40px",
      color: "#FFC700",
      paddingBottom: "30px"
    };
    const iconStyle = {
      color: "#FFC700",
      size: "13px",
      margin: "5px"
    };
    return (
      <section>
        <div
          className="container-fluid mt-3"
          style={{ backgroundColor: "#001530" }}
        >
          <div className="row">
            <div className="col-lg-12 text-center m-1 py-4" id="courseModule">
              <h5 className="text-bold" style={headerStyle}>
                HOW IT WORK
              </h5>
              <h5 className="" style={{ color: "white" }}>
                {" "}
                Learn Distributed Systems
              </h5>
              <p className="text-muted">
                An introduction to the masterclass and best practices.
              </p>
            </div>
          </div>
          <div className="row ml-5 mr-5">
            <div className="col-sm-4 course1 p-4 zoom" style={couser1style}>
              <div className="text-lg-center">
                <i class="fas fa-chess-pawn" style={courseIconStyle} />
              </div>

              <h5>Distributed Systems - Introductory Course</h5>
              <p className="text-muted">
                Learn fundamentals of Distributed Processing, Distributed Data
                Storage, NoSQL Databases, Microservcies, API Design, and System
                Design
              </p>
              <ul className="list-unstyled">
                <li style={liStyle}>
                  <i class="far fa-hand-point-right" style={iconStyle} />

                  <strong>6 Modules, each module 4 hours each</strong>
                </li>
                <li style={liStyle}>
                  <i class="far fa-hand-point-right" style={iconStyle} />{" "}
                  <strong>
                    Case Study in every module to understand real life
                    application
                  </strong>
                </li>
                <li style={liStyle}>
                  <i class="far fa-hand-point-right" style={iconStyle} />{" "}
                  <strong>Hands on exercise in each module</strong>
                </li>
              </ul>
              <a
                href="#syllabusIntroductoryCourse"
                className="btn"
                style={btnStyle}
              >
                Course Content
              </a>
            </div>
            <div className="col-sm-4 course2 p-4 zoom" style={course2tyle}>
              <div className="text-lg-center">
                <i class="fas fa-chess-knight" style={courseIconStyle} />
              </div>
              <h5 style={headerStyle}>
                Distributed Systems - Intermediate Course
              </h5>
              <p className="text-muted">
                Learn fundamentals of Distributed Processing, Distributed Data
                Storage, NoSQL Databases, Microservcies, API Design, and System
                Design
              </p>
              <ul className="list-unstyled">
                <li style={liStyle}>
                  <i class="far fa-hand-point-right" style={iconStyle} />{" "}
                  <strong>9 Modules, each module 4 hours each</strong>
                </li>
                <li style={liStyle}>
                  <i class="far fa-hand-point-right" style={iconStyle} />{" "}
                  <strong>
                    Case Study in every module to understand real life
                    application
                  </strong>
                </li>
                <li style={liStyle}>
                  <i class="far fa-hand-point-right" style={iconStyle} />{" "}
                  <strong>Hands on exercise in each module</strong>
                </li>
              </ul>
              <a
                href="#syllabusIntermediateCourse"
                className="btn"
                style={btnStyle}
              >
                Course Content
              </a>
            </div>
            <div className="col-sm-4  course3 p-4 zoom" style={course3tyle}>
              <div className="text-lg-center">
                <i class="fas fa-chess-queen" style={courseIconStyle} />
              </div>
              <h5>Distributed Systems - Advanced Course</h5>
              <p className="text-muted">
                Learn fundamentals of Distributed Processing, Distributed Data
                Storage, NoSQL Databases, Microservcies, API Design, and System
                Design
              </p>
              <ul className="list-unstyled">
                <li style={liStyle}>
                  <i class="far fa-hand-point-right" style={iconStyle} />{" "}
                  <strong>12 Modules, each module 4 hours each</strong>
                </li>
                <li style={liStyle}>
                  <i class="far fa-hand-point-right" style={iconStyle} />{" "}
                  <strong>
                    Case Study in every module to understand real life
                    application
                  </strong>
                </li>
                <li style={liStyle}>
                  <i class="far fa-hand-point-right" style={iconStyle} />{" "}
                  <strong>Hands on exercise in each module</strong>
                </li>
              </ul>
              <a
                href="#syllabusAdvancedCourse"
                className="btn"
                style={btnStyle}
              >
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
