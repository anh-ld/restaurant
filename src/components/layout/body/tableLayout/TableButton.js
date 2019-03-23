import React from 'react';
import { connect } from "react-redux";
import selectTable from '../../../../actions/orderActions/selectTable';
import styled from 'styled-components';
import { buttonMainStyle, media } from '../../../../utils/styling';

const Button = styled.button`
  ${buttonMainStyle}
  font-size: 2rem;
  width: 75px;
  height: 75px;
  margin: 0 1rem;
  ${media.tablet`
    margin-bottom: 0.5rem;
  `}
`;

const $TableButton = styled(Button)`
  background-color: #FCDEF0;
  color: #333333;
  &:hover, &:active {
    background-color: #FF95D6;
  }
  
`;

const SelectedTableButton = styled(Button)`
  background-color: #FF95D6;
  color: #333333;
`;

const TableButton = ({ tableStatusData, id, onSelect }) => {
  if (tableStatusData[id]) {
    return (
      <SelectedTableButton
        onClick={() => onSelect(id)}
      >
        {id}
      </SelectedTableButton>
    )
  }

  return (
    <$TableButton
      onClick={() => onSelect(id)}
    >
      {id}
    </$TableButton>
  );
};

const mapStateToProps = (state) => {
  return {
    tableStatusData: state.tableStatusData
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSelect: (id) => {
      dispatch(selectTable(id));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TableButton);