import React, { Component } from "react";
import Toolbar from "./components/Toolbar/Toolbar";
import Header from "./components/header/header";

import Courses from "./components/section/courses";
import Module from "./components/section/modules";
import Pricing from "./components/pricing/priceing";
import Faq from "./components/faq/faq";
import Footer from "./components/footer/footer";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Toolbar logo="#" brandName="Codeathlon - Distributed Systems Course" />
        <Header
          header="Distributed System Courses"
          paragraph=" Codeathlon's Distributed System Courses is a set of in classroom training courses for learning distributed systems."
        />
        <Module />
        <Courses />
        <Pricing />
        <Faq />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
