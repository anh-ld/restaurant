import React, { Component } from 'react';
import { connect } from 'react-redux';

class Summary extends Component {
  render() {
    let {tableStatusData} = this.props;
    let occupiedTable = 0; 
    for (let i = 0; i < tableStatusData.length; i++) {
      if (tableStatusData[i] === true) {
        occupiedTable += 1;
      }
    }
    return (
      <ul className="summary">
        <li>
          <p>Occupied Table</p>
          <span>{occupiedTable}</span>
          <span className="small-text">/15</span>
        </li>
        <li>
          <p>Total Money</p>
          <span>{this.props.moneyEarned}</span>
          <span className="small-text">$</span>
        </li>
        <li>
          <p>Total Customer</p>
          <span>{this.props.customer}</span>
        </li>
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tableStatusData: state.tableStatusData,
    moneyEarned: state.moneyEarned,
    customer: state.totalCustomer
  }
}

export default connect(mapStateToProps, null)(Summary);