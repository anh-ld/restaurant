import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from './header/Modal';
import { signOut } from '../../actions/signOut';

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
          <button onClick={this.handleClick}>Sign Out</button>
        </div>
        <Modal show={this.state.showAlert} toggleModal={this.toggleModal}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tableStatusData: state.tableStatusData
  }
}

export default connect(mapStateToProps, { signOut })(Header);