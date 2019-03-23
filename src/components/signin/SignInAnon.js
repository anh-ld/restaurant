import React from 'react';
import { connect } from 'react-redux';
import { signInAnon } from '../../actions/userActions/signIn';
import styled from 'styled-components';

const $Anon = styled.p`
  color: #E76EB1;
  margin: 0.25rem 0;
  font-size: 0.9rem;
  text-align: center;
`;

const Link = styled.span`
  text-decoration: underline;
  &:hover {
    cursor: pointer;
    color: #B44772;
  }
  &:active {
    color: #B44772;
  }
`;

const SignInAnon = ({handleSignInClick, signInAnon}) => {
  const handleClick = () => {
    handleSignInClick();
    signInAnon();
  };

  return (
    <$Anon>
      or click&nbsp;
      <Link
        onClick={handleClick}
      >
        here
      </Link>
      &nbsp;to sign in anonymously
    </$Anon>
  )
};

export default connect(null, { signInAnon })(SignInAnon);