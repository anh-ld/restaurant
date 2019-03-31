import React, {useState} from 'react';
import {connect} from 'react-redux';
import Modal from '../atom/Modal';
import CheckOutAlert from './header/CheckOutAlert';
import {signOut} from '../../actions/userActions/signOut';
import styled from 'styled-components';
import {buttonMainStyle, media} from '../../utils/styling';
import {transform, getDMY} from '../../utils/date';

const $Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h1`
  color: ${({color}) => color['800']};
  ${media.tablet`
    font-size: 1.5rem;
  `}
  ${media.phone`
    font-size: 1.2rem;
  `}
`;

const Date = styled.h2`
  display: inline-block;
  line-height: 2.5rem;
  font-weight: 500;
  color: #333333;
  ${media.tablet`
    font-size: 1.2rem;
    line-height: 2.25rem;
  `}
  ${media.phone`
    font-size: 1rem;
    line-height: 1.75rem;
  `}
`;

const SignOutButton = styled.button`
  ${buttonMainStyle}
  font-size: 1.5rem;
  background-color: #FFFFFF;
  color: ${({color}) => color['600']};
  margin-left: 1rem;
  padding: 0 0.5rem;
  &:hover, &:active {
    color: #FFF;
    background-color: ${({color}) => color['700']};
  }
  ${media.tablet`
    font-size: 1.2rem;
    margin-left: 0.25rem;
    padding: 0.25rem;
    width: initial;
  `}
  ${media.phone`
    font-size: 1rem;
    width: initial;
  `}
`;

const Header = ({tableStatusData, signOut, theme}) => {
	const {date, month, year} = getDMY();
	const [showAlert, setShowAlert] = useState(false);
	const handleClick = () => {
		if (tableStatusData.includes(true)) {
			setShowAlert(!showAlert);
		} else {
			signOut();
		}
	};

	return (
		<$Header>
			<Title color={theme}>Hanoi Pizza Restaurant</Title>
			<div>
				<Date>{transform(date)}/{transform(month)}/{year}</Date>
				<SignOutButton
					color={theme}
					onClick={handleClick}
				>
					Go-out
				</SignOutButton>
			</div>
			<Modal
				show={showAlert}
				toggleModal={() => setShowAlert(!showAlert)}
				title="Warning"
			>
				<CheckOutAlert/>
			</Modal>
		</$Header>
	)

};

const mapStateToProps = state => {
	return {
		tableStatusData: state.tableStatusData,
		theme: state.theme.palette
	}
};

export default connect(mapStateToProps, {signOut})(Header);