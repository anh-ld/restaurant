import React, { Component } from 'react';
import { connect } from "react-redux";
import toggleTable from '../../../../actions/orderActions/toggleTable';
import checkoutTable from '../../../../actions/orderActions/checkoutTable';
import clearSelectedTable from '../../../../actions/orderActions/clearSelectedTable';
import styled from 'styled-components';
import buttonMainStyle from '../../../../utils/buttonStyling';

const Button = styled.button`
  ${buttonMainStyle}
  font-size: 1.5rem;
  padding: 0.5rem 0rem;
  width: 100%;
`

const CheckInButton = styled(Button)`
  background-color: #5aac44;
  color: #FFF;
  &:hover, &:active {
    background-color: #519839;
  }
  &:disabled {
    color: #a5acb0;
    background-color: #EDEFF0;
    cursor: not-allowed;
  }
`

const CheckOutButton = styled(Button)`
  background-color: #D6DADC;
  color: #333333;
  &:hover, &:active {
    background-color: #838C91;
    color: #FFF;
  }
`

class ToggleTableButton extends Component {
  handleClick = () => {
    const { selectedTable, tableData, uid, dataHistory, tableStatus, onCheckOut, onToggle } = this.props; 
    if (tableStatus) {
      onCheckOut(selectedTable, tableData, uid, dataHistory);
    }
    onToggle(selectedTable);
  }

  render() {
    const { tableStatus, selectedTable } = this.props;
    if (tableStatus) {
      return (
        <CheckOutButton
          onClick={this.handleClick}
        >
          Checkout #{selectedTable}
        </CheckOutButton>
      );
    }
    return (
      <CheckInButton
        disabled={selectedTable === null}
        onClick={this.handleClick}
      >
        {selectedTable ?
        "Checkin #" + selectedTable :
        "Checkin"}
      </CheckInButton>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedTable: state.selectedTable,
    tableStatus: state.tableStatusData[state.selectedTable],
    tableData: state.tableData,
    uid: state.user.uid,
    dataHistory: state.dataHistory
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onToggle: (id) => {
      dispatch(toggleTable(id));
    },
    onCheckOut: (id, tableData, uid, dataHistory) => {
      let total = 0;
      for (let i = 0; i < tableData[id].length; i++) {
        total += tableData[id][i].price * tableData[id][i].quantity;
      }

      dispatch(clearSelectedTable());
      dispatch(checkoutTable(total, dataHistory, uid));
      // dispatch(addCustomer());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToggleTableButton);