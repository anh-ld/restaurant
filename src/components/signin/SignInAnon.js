import React from 'react';
import {connect} from 'react-redux';
import {signInAnon} from '../../actions/userActions/signIn';
import styled from 'styled-components';

const $Anon = styled.p`
  color: ${({color}) => color['600']};
  margin: 0.25rem 0;
  font-size: 0.9rem;
  text-align: center;
`;

const Link = styled.span`
  text-decoration: underline;
  &:hover {
    cursor: pointer;
    color: ${({color}) => color['800']};
  }
  &:active {
    color: ${({color}) => color['800']};
  }
`;

const SignInAnon = ({theme, handleSignInClick, signInAnon}) => {
	const handleClick = () => {
		handleSignInClick();
		signInAnon();
	};

	return (
		<$Anon color={theme}>
			or click&nbsp;
			<Link
				color={theme}
				onClick={handleClick}
			>
				here
			</Link>
			&nbsp;to sign in anonymously
		</$Anon>
	)
};

const mapStateToProps = state => ({theme: state.theme.palette});

export default connect(mapStateToProps, {signInAnon})(SignInAnon);