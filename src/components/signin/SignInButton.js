import React from 'react';
import { connect } from 'react-redux';
import { signInWithGoogle } from '../../actions/userActions/signIn';
import styled from 'styled-components';
import { buttonMainStyle } from '../../utils/styling';

const $SignInButton = styled.button`
  ${buttonMainStyle}
  font-size: 1.5rem;
  padding: 0.5rem 0;
  width: 100%;
  background-color: #CD5A91;
  color: #FFF;
  line-height: 2rem;
  &:hover, &:active {
    background-color: #B44772;
  }
`;

const SignInButton = ({isSigningIn, handleSignInClick, signInWithGoogle}) => {
  const handleClick = () => {
    handleSignInClick();
    signInWithGoogle();
  };

  return (
    <$SignInButton
      onClick={handleClick}
    >
      {!isSigningIn ? "Sign in with Google" : "Signing in..."}
    </$SignInButton>
  )
};

export default connect(null, { signInWithGoogle })(SignInButton);