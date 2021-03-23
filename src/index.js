// React Required
import React, { Component } from "react";
import ReactDOM from "react-dom";

// Create Import File
import "./index.scss";

import PersonalPortfolio from "./home/PersonalPortfolio";

// Element Layout
import PortfolioDetails from "./elements/PortfolioDetails";
import error404 from "./elements/error404";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

class Root extends Component {
  render() {
    return (
      <BrowserRouter basename={"/"}>
        <Switch>
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/`}
            component={PersonalPortfolio}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/personal-portfolio`}
            component={PersonalPortfolio}
          />
          {/* Element Layot */}
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/portfolio-details`}
            component={PortfolioDetails}
          />
          {/* Blocks Elements  */}
          <Route path={`${process.env.PUBLIC_URL}/404`} component={error404} />
          <Route component={error404} />
        </Switch>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById("root"));
serviceWorker.register();
