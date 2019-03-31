import React from 'react';
import styled from 'styled-components';
import Credit from './atom/Credit';
import ColorPalette from './atom/ColorPalette';

const $Footer = styled.div`
	padding: 1rem;
	display: flex;
	justify-content: space-between;
`

const Footer = () => {
	return (
		<$Footer>
			<Credit/>
			<ColorPalette/>
		</$Footer>
	);
};

export default Footer;