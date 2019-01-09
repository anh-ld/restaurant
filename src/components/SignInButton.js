import React, { Component } from 'react';
import { connect } from 'react-redux';
import sign from '../actions/sign';

class SignInButton extends Component {
  state = {
    buttonName: "Sign in"
  }

  handleClick = () => {
    this.setState({buttonName: "Signing in..."});
    setTimeout(() => {
      this.props.handleSignIn();
    }, 1000);
  }

  render() {
    return (
      <button
        id="signInButton"
        onClick={this.handleClick}
      >
        {this.state.buttonName}
      </button>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSignIn: () => {
      dispatch(sign());
    }
  }
}

export default connect(null, mapDispatchToProps)(SignInButton);