import React, { useState } from 'react';
import SignInButton from './signin/SignInButton';
import SignInAnon from './signin/SignInAnon';
import styled from 'styled-components';

const $SignIn = styled.div`
  width: 300px;
  margin: 0 auto;
  padding: calc(50vh - 38px - 26px) 0;
`;

const SignIn = () => {
  const [isSigningIn, setIsSigningIn] = useState(false);
  return (
    <$SignIn>
      <SignInButton
        isSigningIn={isSigningIn}
        handleSignInClick={() => setIsSigningIn(true)}
      />
      <SignInAnon
        handleSignInClick={() => setIsSigningIn(true)}
      />
    </$SignIn>
  );
};

export default SignIn;