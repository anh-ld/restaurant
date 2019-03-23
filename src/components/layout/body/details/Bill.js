import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const $Bill = styled.div`
  color: #E76EB1;
  width: 100%;
  text-align: center;
  padding: 0.5rem 0;
  font-size: 1.5rem;
`;
const Unit = styled.span`
  font-size: 1rem;
`;

const Bill = ({ items }) => {
  const total = items.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <$Bill>
      Total: {total}<Unit>$</Unit>
    </$Bill>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.tableData[state.selectedTable]
  }
};

export default connect(mapStateToProps, null)(Bill);