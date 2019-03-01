import React, { Component } from "react";
import Header from "./components/header/header";

import Courses from "./components/section/courses";
import Module from "./components/section/modules";
import Pricing from "./components/pricing/priceing";
import Faq from "./components/faq/faq";
import Footer from "./components/footer/footer";
import Navbar from "./components/Navbar/Navbar";

class App extends Component {
  render() {
    return (
      <section>
        <Navbar />
        <Header
          header="Distributed System Courses"
          paragraph="Codeathlon's Distributed System Courses is a set of in classroom training courses for learning distributed systems."
        />
        <Module />
        <Courses />
        <Pricing />
        <Faq />
        <Footer />
      </section>
    );
  }
}

export default App;
