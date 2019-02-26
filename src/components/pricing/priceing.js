import React, { Component } from "react";
const cardListStyle = {
  color: "#45A29E"
};
const cardStyle = {
  background: "#1F2833",
  color: "#45A29E",
  border: "none",
  marginTop: "20px"
};
const iconStyle = {
  fontSize: "40px",
  color: "#FFC700"
};
const buttonStyle = {
  backgroundColor: "#FFC700"
};
class Pricing extends Component {
  state = {
    basicCoursePrice: "9,999",
    interimediateCoursePrice: "14,999",
    AdvanceCoursePrice: "19,999"
  };

  render() {
    return (
      <section className="bg-light text-center p-5">
        <div className="container-fluid">
          <div className="row text-muted text-center">
            <div className="col m-4">
              <h1 className="display-4 mb-4">Let's get started</h1>
              <div className="underline-dark mb-4" />
              <p className="lead">
                Everything you need to start a wildy profitable online beat
                selling business.
              </p>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div
                className="card card-1 py-1 my-1 mx-auto zoom"
                style={cardStyle}
              >
                <div className="card-body">
                  <i class="fas fa-chess-pawn  py-2" style={iconStyle} />
                  <h5 className="text-uppercase font-weight-bold text-light mb-3">
                    Introductory Course
                  </h5>
                  <ul className="list-unstyled">
                    <li className="card-list-item" style={cardListStyle}>
                      Introduction
                    </li>
                    <li className="card-list-item" style={cardListStyle}>
                      Distributed Processing
                    </li>
                    <li className=" card-list-item" style={cardListStyle}>
                      Distributed Data Storage
                    </li>
                    <li className="card-list-item " style={cardListStyle}>
                      NoSQL Databases
                    </li>
                    <li className=" card-list-item " style={cardListStyle}>
                      Microservices
                    </li>
                    <li className=" card-list-item" style={cardListStyle}>
                      System Design & Project
                    </li>
                  </ul>
                  <h5 className="font-weight-bold text-light mt-5">
                    Start 30th April
                  </h5>
                  <a
                    href="#"
                    class="btn p-2  font-weight-bold text-light"
                    style={buttonStyle}
                    onMouseEnter={this.toggleHover}
                    onMouseLeave={this.toggleHover}
                  >
                    sign-up for just {this.state.basicCoursePrice} /-
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="card card-2  py-1 my-1 mx-auto zoom"
                style={cardStyle}
              >
                <div className="card-body">
                  <i class="fas fa-chess-knight py-2" style={iconStyle} />
                  <h5 className="text-uppercase font-weight-bold text-light mb-4">
                    Intermediate Course
                  </h5>

                  <ul className="list-unstyled">
                    <li className="card-list-item" style={cardListStyle}>
                      Introduction
                    </li>
                    <li className="card-list-item" style={cardListStyle}>
                      Distributed Processing
                    </li>
                    <li className="card-list-item" style={cardListStyle}>
                      Distributed Data Storage
                    </li>
                    <li className="card-list-item " style={cardListStyle}>
                      NoSQL Databases
                    </li>
                    <li className="card-list-item" style={cardListStyle}>
                      Microservices
                    </li>
                    <li className="card-list-item" style={cardListStyle}>
                      System Design & Project
                    </li>
                    <li className="  card-list-item " style={cardListStyle}>
                      Distributed Hashing & Queues
                    </li>
                    <li className=" card-list-item " style={cardListStyle}>
                      Concurrency & Replication Control
                    </li>
                    <li className="card-list-item" style={cardListStyle}>
                      Stream Processing
                    </li>
                  </ul>
                  <h5 className="font-weight-bold text-light mt-5">
                    Start 15th May
                  </h5>
                  <a
                    href="#"
                    className="btn  p-2 font-weight-bold text-light"
                    style={buttonStyle}
                  >
                    Sign-up for just {this.state.interimediateCoursePrice} /-
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="card card-3 border-0 py-1 my-1 mx-auto zoom"
                style={cardStyle}
              >
                <div className="card-body">
                  <i class="fas fa-chess-queen py-2" style={iconStyle} />
                  <h5 className="text-uppercase font-weight-bold text-light mb-4">
                    Advanced Course
                  </h5>

                  <ul className="list-unstyled">
                    <li className="card-list-item" style={cardListStyle}>
                      Introduction
                    </li>
                    <li className="card-list-item" style={cardListStyle}>
                      Distributed Processing
                    </li>
                    <li className="card-list-item" style={cardListStyle}>
                      Distributed Data Storage
                    </li>
                    <li className="card-list-item " style={cardListStyle}>
                      NoSQL Databases
                    </li>
                    <li className=" card-list-item " style={cardListStyle}>
                      Microservices
                    </li>
                    <li className=" card-list-item " style={cardListStyle}>
                      System Design & Project
                    </li>
                    <li className="card-list-item " style={cardListStyle}>
                      Distributed Hashing & Queues
                    </li>
                    <li className="card-list-item " style={cardListStyle}>
                      Concurrency & Replication Control
                    </li>
                    <li className="card-list-item " style={cardListStyle}>
                      Stream Processing
                    </li>
                    <li className="card-list-item" style={cardListStyle}>
                      Distributed Ledgers - Blockchain
                    </li>
                    <li className="card-list-item " style={cardListStyle}>
                      Distributed Consensus
                    </li>
                    <li className="card-list-item " style={cardListStyle}>
                      Distributed Locking
                    </li>
                  </ul>
                  <h5 className="font-weight-bold text-light mt-5">
                    Start 30th May
                  </h5>
                  <a
                    href="#"
                    className="btn p-2 font-weight-bold price-card-button text-light "
                    style={buttonStyle}
                  >
                    Sign-up for just {this.state.interimediateCoursePrice} /-
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="my-5">
            <h2 className="text-muted mb-4">Thanks for being with us!</h2>
            <i class="fas fa-mug-hot fa-3x" style={iconStyle} />
          </div>
        </div>
      </section>
    );
  }
}

export default Pricing;
