import React, { Component } from 'react';
import { Header } from './portfolio-components/Header';
import { BodyContainer } from './portfolio-components/BodyContainer';


class Portfolio extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <BodyContainer />
      </div>
    );
  }
}

export default Portfolio;
