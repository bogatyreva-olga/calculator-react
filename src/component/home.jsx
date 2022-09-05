import React, { Component } from "react";
import {Link} from "react-router-dom";

class Home extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
          <h3 id="simple-web-calculator-built-with-react">
            Simple web calculator built with React
          </h3>
          <Link to="/calculator">go to calculator</Link>
      </React.Fragment>
    );
  }
}

export default Home;
