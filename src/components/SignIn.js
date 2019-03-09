import React, { Component } from 'react';
import SignInButton from './signin/SignInButton';
import SignInAnon from './signin/SignInAnon';
import styled from 'styled-components';

const $SignIn = styled.div`
  width: 300px;
  margin: 0 auto;
  padding: calc(50vh - 38px - 26px) 0;
`

class SignIn extends Component {
  state = {
    isSigningIn: false
  }

  handleSignInClick = () => {
    this.setState({isSigningIn: true})
  }

  render() {
    return (
      <$SignIn>
        <SignInButton
          isSigningIn={this.state.isSigningIn}
          handleSignInClick={this.handleSignInClick}
        />
        <SignInAnon
          handleSignInClick={this.handleSignInClick}
        />
      </$SignIn>
    );
  }
}

export default SignIn;