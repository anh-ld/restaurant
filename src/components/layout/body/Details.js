import React, { Component } from 'react';
import ToggleTableButton from './details/ToggleTableButton';
import OrderList from './details/OrderList';
import { connect } from "react-redux";
import Bill from './details/Bill';

class Details extends Component {
  render() {
    return (
      <div className="details">
        <ToggleTableButton />
        {this.props.tableStatus ? <OrderList /> : ""}
        {this.props.tableStatus ? <Bill /> : ""}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tableStatus: state.tableStatusData[state.selectedTable]
  }
}

export default connect(mapStateToProps, null)(Details);