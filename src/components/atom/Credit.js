import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';

const $Credit = styled.span`
  color: ${props => props.color['400']};
  text-align: center;
  margin: 0;
  padding: 0;
`;

const Link = styled.a`
  &:link, &:visited {
    color: ${props => props.color['400']};
  }
  &:active, &:hover {
    color: ${props => props.color['600']};
  }
`;

const Credit = ({theme}) => {
	return (
		<$Credit color={theme}>
			made by&nbsp;
			<Link
				color={theme}
				href="https://github.com/culee" target="_blank"
				rel="noopener noreferrer"
			>
				@culee
			</Link>
		</$Credit>
	);
};

const mapStateToProps = state => ({theme: state.theme.palette});

export default connect(mapStateToProps)(Credit);