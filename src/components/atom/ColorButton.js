import React from 'react';
import styled from 'styled-components';

const $ColorButton = styled.div`
	width: 20px;
	height: 20px;
	background-color: ${({color}) => color};
	border-radius: 50%;
	display: inline-block;
	margin: 0 0.25rem;
	opacity: ${({isActive}) => isActive && 1 || 0.2};
	&:hover {
		opacity: ${({isActive}) => isActive && 1 || 0.7};
		cursor: pointer;
	}
`

const ColorButton = ({color, value, isActive, handleChangeTheme}) => {
	return (
		<$ColorButton
			color={color}
			isActive={isActive}
			onClick={() => handleChangeTheme(value)}
		/>
	);
};

export default ColorButton;