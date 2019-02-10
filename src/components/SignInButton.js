import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../actions/signInWithGoogle';

class SignInButton extends Component {
  state = {
    buttonName: "Sign in with Google"
  }

  handleClick = () => {
    this.setState({buttonName: "Signing in..."});
    this.props.signIn();
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

export default connect(null, { signIn })(SignInButton);