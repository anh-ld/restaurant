import React from 'react';
import ToggleTableButton from './details/ToggleTableButton';
import OrderList from './details/OrderList';
import { connect } from "react-redux";
import Bill from './details/Bill';
import styled from 'styled-components';
import media from '../../../utils/mediaQueriesStyling';

const $Details = styled.div`
  width: 316px;
  background-color: #FFF;
  padding: 0.5rem;
  border-radius: 0.25rem;
  margin-right: 1rem;
  ${media.tablet`
    width: initial;
    margin-right: 0;
    margin-bottom: 0.5rem;
    height: 350px;
  `}
`

const Details = ({ tableStatus }) => {
  return (
    <$Details>
      <ToggleTableButton />
      {tableStatus ? <OrderList /> : null}
      {tableStatus ? <Bill /> : null}
    </$Details>
  );
};

const mapStateToProps = (state) => {
  return {
    tableStatus: state.tableStatusData[state.selectedTable]
  }
}

export default connect(mapStateToProps, null)(Details);