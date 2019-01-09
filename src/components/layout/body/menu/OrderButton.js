import React, { Component } from 'react';
import { connect } from "react-redux";
import addTableItem from '../../../../actions/addTableItem';

class OrderButton extends Component {
  render() {
    return (
      <button
        disabled={this.props.selectedTable === null || !this.props.tableStatusData[this.props.selectedTable]}
        onClick={() => this.props.onAdd(this.props.name, this.props.price, this.props.selectedTable)}
      >
        {this.props.name}
      </button>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedTable: state.selectedTable,
    tableStatusData: state.tableStatusData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAdd: (name, price, tableId) => {
      dispatch(addTableItem(name, price, tableId));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderButton);