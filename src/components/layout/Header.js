import React, { Component } from 'react';
import { connect } from 'react-redux';
import sign from '../../actions/sign';
import clearSelectedTable from '../../actions/clearSelectedTable';
import Modal from './header/Modal';

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
    this.setState({showAlert: !this.state.showAlert});
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
        <Modal show={this.state.showAlert} toggleModal={this.toggleModal}/>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => {
      dispatch(clearSelectedTable());
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