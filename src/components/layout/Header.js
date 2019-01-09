import React, { Component } from 'react';
import { connect } from 'react-redux';
import sign from '../../actions/sign';

class Header extends Component {
  handleClick = () => {
    if (this.props.tableStatusData.includes(true)) {
      alert("Please checkout all tables before signing out!!!");
    } else {
      this.props.signOut();
    }
  }

  render() {
    const year = new Date().getFullYear();
    const month = new Date().getMonth() + 1;
    const date = new Date().getDate();
    return (
      <div className="header">
        <h1>Hanoi Pizza Restaurant</h1>
        <div>
          <h2>{date}/{month}/{year}</h2>
          <button onClick={this.handleClick}>Sign out</button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => {
      dispatch(sign());
    }
  }
}

const mapStateToProps = (state) => {
  return {
    tableStatusData: state.tableStatusData
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);