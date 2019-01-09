import React, { Component } from 'react';
import { connect } from "react-redux";
import toggleTable from '../../../../actions/toggleTable';
import incrementMoneyEarned from '../../../../actions/increaseMoneyEarned';
import clearSelectedTable from '../../../../actions/clearSelectedTable';
import addCustomer from '../../../../actions/addCustomer';

class ToggleTableButton extends Component {
  handleClick = () => {
    if (this.props.tableStatus) {
      this.props.onCheckOut();
    }
    this.props.onToggle(this.props.selectedTable, this.props.tableData)
  }

  render() {
    return (
      <button 
        id={this.props.tableStatus ?"checkOutButton" : "checkInButton"}
        disabled={this.props.selectedTable === null}
        onClick={this.handleClick}
      >
        {this.props.tableStatus ? 
        "Checkout #" + this.props.selectedTable :
        this.props.selectedTable === null ?
        "Checkin" :
        "Checkin #" + this.props.selectedTable}
      </button>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedTable: state.selectedTable,
    tableStatus: state.tableStatusData[state.selectedTable],
    tableData: state.tableData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onToggle: (id, tableData) => {
      let total = 0;
      for (let i = 0; i < tableData[id].length; i++) {
        total += tableData[id][i].price * tableData[id][i].quantity;
      }
      dispatch(toggleTable(id));
      dispatch(incrementMoneyEarned(total));
    },
    onCheckOut: () => {
      dispatch(clearSelectedTable());
      dispatch(addCustomer());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToggleTableButton);