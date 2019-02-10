import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './layout/Header';
import Summary from './layout/Summary';
import Body from './layout/Body';
import { fetchData } from '../actions/fetchData';

class Dashboard extends Component {
  componentWillMount() {
    this.props.fetchData(this.props.uid);
  }

  render() {
    return (
      <div className="dashboard">
        <Header />
        <Summary />
        <Body />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    uid: state.user.uid
  }
}

export default connect(mapStateToProps, { fetchData })(Dashboard);