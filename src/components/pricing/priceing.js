import React, { Component } from "react";

class Pricing extends Component {
  state = {
    basicCoursePrice: "9,999",
    interimediateCoursePrice: "14,999",
    AdvanceCoursePrice: "19,999"
  };

  render() {
    const cardListStyle = {
      color: "black"
    };
    const cardStyle = {
      border: "none",
      marginTop: "20px"
    };
    const iconStyle = {
      fontSize: "30px"
    };
    const buttonStyle = {
      backgroundColor: "#017BFF"
    };
    const headerStyle = {
      fontWheit: "bold",
      marginTop: "20px",
      marginBottom: "13px"
    };
    const dateStyle = {
      fontWeight: "bold",
      marginBottom: "Auto"
    };
    return (
      <section className="text-center p-5">
        <div className="container-fluid">
          <div className="row text-muted">
            <div className="col-sm-12 m-4" id="coursePrice">
              <h3 className="mb-4">Let's get started</h3>
              <div className="underline-dark mb-4" />
              <p className="lead">
                Everything you need to start a wildy profitable online beat
                selling business.
              </p>
            </div>
          </div>
          <div className="row card-group">
            <div className="col-sm-4">
              <div className="card card-1 zoom " style={cardStyle}>
                <div className="card-body">
                  <i class="fas fa-chess-pawn" style={iconStyle} />
                  <h5 className="text-uppercase" style={headerStyle}>
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
                  <h5 style={dateStyle}>Start 30th April</h5>
                  <a
                    href="#"
                    className="btn p-2  font-weight-bold text-light"
                    style={buttonStyle}
                  >
                    sign-up for just {this.state.basicCoursePrice} /-
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card card-2 zoom" style={cardStyle}>
                <div className="card-body">
                  <i className="fas fa-chess-knight" style={iconStyle} />
                  <h5 className="text-uppercase" style={headerStyle}>
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
                  <h5 style={dateStyle}>Start 15th May</h5>
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
            <div className="col-sm-4">
              <div className="card card-3 zoom " style={cardStyle}>
                <div className="card-body">
                  <i className="fas fa-chess-queen" style={iconStyle} />
                  <h5 className="text-uppercase" style={headerStyle}>
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
                  <h5 style={dateStyle}>Start 30th May</h5>
                  <a
                    href="#"
                    className="btn p-2 font-weight-bold price-card-button text-light "
                    style={buttonStyle}
                  >
                    Sign-up for just {this.state.AdvanceCoursePrice} /-
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Pricing;
