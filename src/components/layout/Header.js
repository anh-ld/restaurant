import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from '../atom/Modal';
import CheckOutAlert from './header/CheckOutAlert';
import { signOut } from '../../actions/userActions/signOut';
import styled from 'styled-components';
import media from '../../utils/mediaQueriesStyling';
import buttonMainStyle from '../../utils/buttonStyling';
import transform from '../../utils/transformDate';

const $Header = styled.div`
  display: flex;
  justify-content: space-between;
`

const Title = styled.h1`
  color: #519839;
  ${media.tablet`
    font-size: 1.5rem;
  `}
  ${media.phone`
    font-size: 1.2rem;
  `}
`

const $Date = styled.h2`
  display: inline-block;
  line-height: 2.5rem;
  font-weight: 500;
  color: #333333;
  ${media.tablet`
    font-size: 1.2rem;
    line-height: 2.25rem;
  `}
  ${media.phone`
    font-size: 1rem;
    line-height: 1.75rem;
  `}
`

const SignOutButton = styled.button`
  ${buttonMainStyle}
  font-size: 1.5rem;
  background-color: #FFF;
  color: #519839;
  margin-left: 1rem;
  padding: 0 0.5rem;
  &:hover, &:active {
    color: #FFF;
    background-color: #49852E;
  }
  ${media.tablet`
    font-size: 1.2rem;
    margin-left: 0.25rem;
    padding: 0.25rem;
    width: initial;
  `}
  ${media.phone`
    font-size: 1rem;
    width: initial;
  `}
`

class Header extends Component {
  state = {
    showAlert: false
  }

  handleClick = () => {
    if (this.props.tableStatusData.includes(true)) {
      this.setState({showAlert: !this.state.showAlert})
    } else {
      this.props.signOut();
    }
  }

  toggleModal = () => {
    this.setState((prevState) => ({
      showAlert: !prevState.showAlert
    }))
  }

  render() {
    const year = new Date().getFullYear();
    const month = new Date().getMonth() + 1;
    const date = new Date().getDate();
    return (
      <$Header>
        <Title>Hanoi Pizza Restaurant</Title>
        <div>
          <$Date>{transform(date)}/{transform(month)}/{year}</$Date>
          <SignOutButton onClick={this.handleClick}>Sign Out</SignOutButton>
        </div>
        <Modal
          show={this.state.showAlert}
          toggleModal={this.toggleModal}
          title="Warning"
        >
          <CheckOutAlert />
        </Modal>
      </$Header>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tableStatusData: state.tableStatusData
  }
}

export default connect(mapStateToProps, { signOut })(Header);