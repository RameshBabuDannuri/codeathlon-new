import React, { Component } from "react";
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
              <div className="card card-1 border-0 text-dark py-1 my-1 mx-auto">
                <div className="card-body">
                  <i class="fas fa-chess-pawn fa-3x text-dark py-2" />
                  <h5 className="text-uppercase font-weight-bold mb-3">
                    Introductory Course
                  </h5>
                  <ul className="list-unstyled">
                    <li className="card-list-item">Introduction</li>
                    <li className="card-list-item">Distributed Processing</li>
                    <li className=" card-list-item">
                      Distributed Data Storage
                    </li>
                    <li className="card-list-item ">NoSQL Databases</li>
                    <li className=" card-list-item ">Microservices</li>
                    <li className=" card-list-item">System Design & Project</li>
                  </ul>
                  <a
                    href="#"
                    class="btn btn-primary p-2  font-weight-bold price-card-button text-light"
                  >
                    sign-up for just {this.state.basicCoursePrice} /-
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card card-2 border-0 py-1 my-1 mx-auto">
                <div className="card-body">
                  <i class="fas fa-chess-knight fa-3x text-dark py-2" />
                  <h5 className="text-uppercase font-weight-bold mb-4">
                    Intermediate Course
                  </h5>

                  <ul className="list-unstyled">
                    <li className="  card-list-item">
                      <i class="fal fa-check" />
                      Introduction
                    </li>
                    <li className="card-list-item">
                      <i class="fas fa-check" />
                      Distributed Processing
                    </li>
                    <li className="card-list-item">Distributed Data Storage</li>
                    <li className=" card-list-item ">NoSQL Databases</li>
                    <li className="card-list-item">Microservices</li>
                    <li className="  card-list-item">
                      System Design & Project
                    </li>
                    <li className="  card-list-item ">
                      Distributed Hashing & Queues
                    </li>
                    <li className=" card-list-item ">
                      Concurrency & Replication Control
                    </li>
                    <li className="card-list-item">Stream Processing</li>
                  </ul>
                  <a
                    href="#"
                    className="btn btn-primary p-2 font-weight-bold price-card-button "
                  >
                    Sign-up for just {this.state.interimediateCoursePrice} /-
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card card-3 border-0 py-1 my-1 mx-auto">
                <div className="card-body">
                  <i class="fas fa-chess-queen text-dark fa-3x" />
                  <h5 className="text-uppercase font-weight-bold mb-4">
                    Advanced Course
                  </h5>

                  <ul className="list-unstyled">
                    <li className="card-list-item">Introduction</li>
                    <li className="card-list-item">Distributed Processing</li>
                    <li className="card-list-item">Distributed Data Storage</li>
                    <li className="card-list-item ">NoSQL Databases</li>
                    <li className=" card-list-item ">Microservices</li>
                    <li className=" card-list-item ">
                      System Design & Project
                    </li>
                    <li className="card-list-item ">
                      Distributed Hashing & Queues
                    </li>
                    <li className="card-list-item ">
                      Concurrency & Replication Control
                    </li>
                    <li className="card-list-item ">Stream Processing</li>
                    <li className="card-list-item">
                      Distributed Ledgers - Blockchain
                    </li>
                    <li className="card-list-item ">Distributed Consensus</li>
                    <li className="card-list-item ">Distributed Locking</li>
                  </ul>
                  <a
                    href="#"
                    className="btn btn-primary p-2 font-weight-bold price-card-button "
                  >
                    Sign-up for just {this.state.interimediateCoursePrice} /-
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="my-5">
            <h2 className="text-muted mb-4">Thanks for being with us!</h2>
            <i class="fas fa-mug-hot text-muted fa-3x" />
          </div>
        </div>
      </section>
    );
  }
}

export default Pricing;
