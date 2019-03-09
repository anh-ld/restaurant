import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signInWithGoogle } from '../../actions/userActions/signIn';
import styled from 'styled-components';
import buttonMainStyle from '../../utils/buttonStyling';

const $SignInButton = styled.button`
  ${buttonMainStyle}
  font-size: 1.5rem;
  padding: 0.5rem 0rem;
  width: 100%;
  background-color: #5AAC44;
  color: #FFF;
  line-height: 2rem;
  &:hover, &:active {
    background-color: #519839;
  }
`

class SignInButton extends Component {
  handleClick = () => {
    this.props.handleSignInClick();
    this.props.signInWithGoogle();
  }

  render() {
    const { isSigningIn } = this.props;
    return (
      <$SignInButton
        onClick={this.handleClick}
      >
       {!isSigningIn ? "Sign in with Google" : "Signing in..."}
      </$SignInButton>
    );
  }
}

export default connect(null, { signInWithGoogle })(SignInButton);