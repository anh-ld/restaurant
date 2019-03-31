import React from 'react';
import styled from 'styled-components';
import {buttonMainStyle, media} from '../../utils/styling';
import {connect} from 'react-redux'

const BackDrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 3rem;
  z-index: 1;
  ${media.tablet`
    padding: 2rem;
  `}
  ${media.phone`
    padding: 1rem;
  `}
`;

const $Modal = styled.div`
  background-color: #FFFFFF;
  border-radius: 0.25rem;
  padding: 1rem;
  margin: 0 auto;
  max-width: 900px;
  ${media.phone`
    padding: 0.5rem;
  `}
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h2`
  line-height: initial;
  display: block;
  margin: 0;
  color: ${props => props.color['600']};
`;

const CloseButton = styled.button`
  ${buttonMainStyle}
  font-size: 1.5rem;
  margin-left: 1rem;
  background-color: ${props => props.color['600']};
  color: #FFF;
  &:hover, &:active {
    background-color: ${props => props.color['700']};
  }
`;

const Modal = ({show, toggleModal, title, children, theme}) => {
	if (!show) {
		return null;
	}

	return (
		<BackDrop>
			<$Modal>
				<Header>
					<Title color={theme}>{title}</Title>
					<CloseButton
						color={theme}
						onClick={toggleModal}
					>
						x
					</CloseButton>
				</Header>
				{children}
			</$Modal>
		</BackDrop>
	);
};

const mapStateToProps = state => ({theme: state.theme.palette});

export default connect(mapStateToProps)(Modal);