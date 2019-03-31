import React from 'react';
import styled from 'styled-components';
import {media} from '../../utils/styling';
import {connect} from 'react-redux';

const $Spinner = styled.h1`
	background-color: ${props => props.color['50']};;
  color: ${props => props.color['700']};
  text-align: center;
  margin: 0 auto;
  padding: calc(50vh - 1.5rem) 0;
  ${media.tablet`
    font-size: 1.45rem;
  `}
  ${media.phone`
    font-size: 1.15rem;
  `}
`;

const Loading = ({theme}) => (
	<$Spinner color={theme}>loading...</$Spinner>
);

const mapStateToProps = state => ({theme: state.theme.palette});

export default connect(mapStateToProps)(Loading);