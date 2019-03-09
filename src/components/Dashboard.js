import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './layout/Header';
import Summary from './layout/Summary';
import Body from './layout/Body';
import { fetchData } from '../actions/userActions/fetchData';
import styled from 'styled-components';
import media from '../utils/mediaQueriesStyling';

const $Dashboard = styled.div`
  width: 960px;
  margin: 0 auto;
  padding: 0 1rem;
  ${media.desktop`
    width: 90%;
    padding: 0 0.5rem 1rem 0.5rem;
  `}
  ${media.tablet`
    width: 95%;
    padding-bottom: 0.5rem;
  `}
`

class Dashboard extends Component {
  componentWillMount() {
    this.props.fetchData(this.props.uid);
  }

  render() {
    return (
      <$Dashboard>
        <Header />
        <Summary />
        <Body />
      </$Dashboard>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    uid: state.user.uid
  }
}

export default connect(mapStateToProps, { fetchData })(Dashboard);