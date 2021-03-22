import React, { Component } from "react";
import { Helmet } from "react-helmet";

class PageHelmet extends Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>{this.props.pageTitle} || Doug Kvamme </title>
          <meta name="description" content="Doug Kvamme Portfolio Website." />
        </Helmet>
      </React.Fragment>
    );
  }
}

export default PageHelmet;
