import React, { Component } from 'react';
import { Header } from './portfolio-components/Header';
import { BodyContainer } from './portfolio-components/BodyContainer';
import { Footer } from './portfolio-components/Footer';
import './index.css';
class Portfolio extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <BodyContainer />
        <Footer />
      </div>
    );
  }
}

export default Portfolio;
