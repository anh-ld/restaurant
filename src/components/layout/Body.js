import React, { Component } from 'react';
import Details from './body/Details';
import TableLayout from './body/TableLayout';
import Menu from './body/Menu';

class Body extends Component {
  render() {
    return (
      <div className="body">
        <div>
          <Details />
          <TableLayout />
        </div>
        <Menu />
      </div>
    );
  }
}

export default Body;