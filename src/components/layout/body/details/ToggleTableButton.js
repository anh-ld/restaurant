import React from 'react';
import { connect } from "react-redux";
import toggleTable from '../../../../actions/orderActions/toggleTable';
import checkoutTable from '../../../../actions/orderActions/checkoutTable';
import clearSelectedTable from '../../../../actions/orderActions/clearSelectedTable';
import styled from 'styled-components';
import { buttonMainStyle } from '../../../../utils/styling';

const Button = styled.button`
  ${buttonMainStyle}
  font-size: 1.5rem;
  padding: 0.5rem 0;
  width: 100%;
`;

const CheckInButton = styled(Button)`
  background-color: #E76EB1;
  color: #FFF;
  &:hover, &:active {
    background-color: #CD5A91;
  }
  &:disabled {
    color: #a5acb0;
    background-color: #EDEFF0;
    cursor: not-allowed;
  }
`;

const CheckOutButton = styled(Button)`
  background-color: #D6DADC;
  color: #333333;
  &:hover, &:active {
    background-color: #838C91;
    color: #FFF;
  }
`;

const ToggleTableButton = ({selectedTable, tableData, uid, dataHistory, tableStatus, onCheckOut, onToggle}) => {
  const handleClick = () => {
    if (tableStatus) {
      onCheckOut(selectedTable, tableData, uid, dataHistory);
    }
    onToggle(selectedTable);
  };

  if (tableStatus) {
    return (
      <CheckOutButton
        onClick={handleClick}
      >
        Checkout #{selectedTable}
      </CheckOutButton>
    );
  }

  return (
    <CheckInButton
      disabled={selectedTable === null}
      onClick={handleClick}
    >
      {selectedTable ? "Checkin #" + selectedTable : "Checkin"}
    </CheckInButton>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedTable: state.selectedTable,
    tableStatus: state.tableStatusData[state.selectedTable],
    tableData: state.tableData,
    uid: state.user.uid,
    dataHistory: state.dataHistory
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onToggle: (id) => {
      dispatch(toggleTable(id));
    },
    onCheckOut: (id, tableData, uid, dataHistory) => {
      const total = tableData[id].reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0);

      dispatch(clearSelectedTable());
      dispatch(checkoutTable(total, dataHistory, uid));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToggleTableButton);