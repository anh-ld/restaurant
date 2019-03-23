import React, { useState } from 'react';
import { connect } from 'react-redux';
import TableData from './summary/TableData';
import Modal from '../atom/Modal';
import Section from './summary/Section';
import styled from 'styled-components';
import { buttonMainStyle, media } from "../../utils/styling";

const $Summary = styled.div`
  display: flex;
  justify-content: space-between;
  ${media.tablet`
    display: block;
    margin-block-end: 0;
  `}
`;

const DisplayName = styled.h2`
  margin: 0;
  line-height: 69px;
  display: inline-block;
  color: #676D70;
  ${media.tablet`
    font-size: 1.2rem;
    display: none;
    line-height: 0;
  `}
  ${media.phone`
    font-size: 1rem;
  `}
`;

const HistoryButton = styled.button`
  ${buttonMainStyle}
  font-size: 1.5rem;
  margin-left: 1rem;
  background-color: #E76EB1;
  color: #FFF;
  &:hover, &:active {
    background-color: #CD5A91;
  }
  ${media.tablet`
    margin-left: 0;
    width: 100%;
    margin-top: 0.5rem;
    padding: 0.2rem 0;
  `}
`;

const Summary = ({tableStatusData, moneyEarned, customer, user}) => {
  const [showDataHistory, setShowDataHistory] = useState(false);
  const occupiedTable = tableStatusData.filter((tableStatus) => tableStatus === true).length;

  return (
    <$Summary>
      <div>
        <Section title="Occupied Table" content={occupiedTable} unit="/15" />
        <Section title="Money" content={moneyEarned} unit="$" />
        <Section title="Customer" content={customer} unit="" />
      </div>
      <div>
        <DisplayName>{user.displayName ? user.displayName : "Anon"}</DisplayName>
        <HistoryButton
          onClick={() => setShowDataHistory(!showDataHistory)}
        >
          History
        </HistoryButton>
      </div>
      <Modal
        show={showDataHistory}
        toggleModal={() =>setShowDataHistory(!showDataHistory)}
        title="History"
      >
        <TableData />
      </Modal>
    </$Summary>
  )
};

const mapStateToProps = (state) => {
  return {
    tableStatusData: state.tableStatusData,
    moneyEarned: state.moneyEarned,
    customer: state.totalCustomer,
    user: state.user
  }
};

export default connect(mapStateToProps, null)(Summary);