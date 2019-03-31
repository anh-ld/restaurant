import React from 'react';
import {connect} from 'react-redux';
import {signInWithGoogle} from '../../actions/userActions/signIn';
import styled from 'styled-components';
import {buttonMainStyle} from '../../utils/styling';

const $SignInButton = styled.button`
  ${buttonMainStyle}
  font-size: 1.5rem;
  padding: 0.5rem 0;
  width: 100%;
  background-color: ${({color}) => color['700']};
  color: #FFF;
  line-height: 2rem;
  &:hover, &:active {
    background-color: ${({color}) => color['800']};
  }
`;

const SignInButton = ({isSigningIn, handleSignInClick, signInWithGoogle, theme}) => {
	const handleClick = () => {
		handleSignInClick();
		signInWithGoogle();
	};

	return (
		<$SignInButton
			color={theme}
			onClick={handleClick}
		>
			{!isSigningIn ? "Sign in with Google" : "Signing in..."}
		</$SignInButton>
	)
};

const mapStateToProps = state => ({theme: state.theme.palette});

export default connect(mapStateToProps, {signInWithGoogle})(SignInButton);