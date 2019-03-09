import React, { Component } from 'react';
import { connect } from 'react-redux';
import TableData from './summary/TableData';
import Modal from '../atom/Modal';
import styled from 'styled-components';
import media from '../../utils/mediaQueriesStyling';
import buttonMainStyle from '../../utils/buttonStyling';

const $Summary = styled.div`
  display: flex;
  justify-content: space-between;
  ${media.tablet`
    display: block;
    margin-block-end: 0;
  `}
`

const Section = styled.div`
  margin-right: 5rem;
  display: inline-block;
  ${media.desktop`
    margin-right: 2.8rem;
  `}
  ${media.tablet`
    margin-right: 2.5rem;
  `}
  ${media.phone`
    margin-right: 1.8rem;
  `}
`

const Title = styled.p`
  margin: 0 0 0.5rem 0;
  text-transform: uppercase;
  color: #676D70;
  font-size: 0.8rem;
  font-weight: 600;
  ${media.phone`
    font-size: 0.7rem;
  `}
`

const Content = styled.span`
  font-size: 2.2rem;
  color: #519839;
  ${media.phone`
    font-size: 1.8rem;
    color: #519839;
  `}
`

const Unit = styled.span`
  font-size: 1.8rem;
  color: #555555;
  ${media.phone`
    font-size: 1.5rem;
  `}
`

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
`

const HistoryButton = styled.button`
  ${buttonMainStyle}
  font-size: 1.5rem;
  margin-left: 1rem;
  background-color: #5AAC44;
  color: #FFF;
  &:hover, &:active {
    background-color: #519839;
  }
  ${media.tablet`
    margin-left: 0;
    width: 100%;
    margin-top: 0.5rem;
    padding: 0.2rem 0;
  `}
`

class Summary extends Component {
  state = {
    showDataHistory: false
  }

  toggleModal = () => {
    this.setState({showDataHistory: !this.state.showDataHistory});
  }

  render() {
    const { tableStatusData, moneyEarned, customer, user } = this.props;
    let occupiedTable = 0; 
    for (let i = 0; i < tableStatusData.length; i++) {
      if (tableStatusData[i] === true) {
        occupiedTable += 1;
      }
    }
    return (
      <$Summary>
        <div>
          <Section>
            <Title>Occupied Table</Title>
            <Content>{occupiedTable}</Content>
            <Unit>/15</Unit>
          </Section>
          <Section>
            <Title>Total Money</Title>
            <Content>{moneyEarned}</Content>
            <Unit>$</Unit>
          </Section>
          <Section>
            <Title>Total Customer</Title>
            <Content>{customer}</Content>
          </Section>
        </div>
        <div>
          <DisplayName>{user.displayName ? user.displayName : "Someone"}</DisplayName>
          <HistoryButton
            onClick={this.toggleModal}
          >
            History
          </HistoryButton>
        </div>
        <Modal
          show={this.state.showDataHistory}
          toggleModal={this.toggleModal}
          title="History"
        >
          <TableData />
        </Modal>
      </$Summary>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tableStatusData: state.tableStatusData,
    moneyEarned: state.moneyEarned,
    customer: state.totalCustomer,
    user: state.user
  }
}

export default connect(mapStateToProps, null)(Summary);