import React from 'react';
import { connect } from "react-redux";
import addTableItem from '../../../../actions/orderActions/addTableItem';
import styled from 'styled-components';
import { buttonMainStyle } from '../../../../utils/styling';

const $OrderButton = styled.button`
  ${buttonMainStyle}
  font-size: 1rem;
  width: 100px;
  height: 50px;
  background-color: #E2E4E6;
  color: #333333;
  margin: 0.25rem 0;
  &:hover, &:active {
    background-color: #D6DADC;
  }
  &:disabled {
    color: #a5acb0;
    background-color: #EDEFF0;
    cursor: not-allowed;
  }
`;

const OrderButton = ({ selectedTable, tableStatusData, onAdd, name, price }) => {
  return (
    <$OrderButton
      disabled={selectedTable === null || !tableStatusData[selectedTable]}
      onClick={() => onAdd(name, price, selectedTable)}
    >
      {name}
    </$OrderButton>
  );
};

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