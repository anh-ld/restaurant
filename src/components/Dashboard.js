import React, { Component } from 'react';
import Header from './layout/Header';
import Summary from './layout/Summary';
import Body from './layout/Body';

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <Header />
        <Summary />
        <Body />
      </div>
    );
  }
}

export default Dashboard;