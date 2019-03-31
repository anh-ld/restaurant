import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {changeTheme} from '../../actions/themeActions/changeTheme';
import palette from '../../utils/theme';
import ColorButton from './ColorButton';

const $Color = styled.div`
	height: 20px;
	text-align: center;
`

const buttonColorArray = [];
for (let color in palette) {
	const colorObject = {};
	colorObject.color = palette[color]['400'];
	colorObject.value = color;
	buttonColorArray.push(colorObject);
}

const ColorPalette = ({currentTheme, changeTheme}) => {


	const handleChangeTheme = (color) => {
		if (currentTheme !== color) {
			changeTheme(color);
		}
	}

	return (
		<$Color>
			{buttonColorArray.map((item, index) => {
				return (
					<ColorButton
						color={item.color}
						value={item.value}
						key={index}
						isActive={item.value === currentTheme}
						handleChangeTheme={handleChangeTheme}
					/>
					)
				})
			}
		</$Color>
	);
};

const mapStateToProps = state => ({currentTheme: state.theme.color});

export default connect(mapStateToProps, {changeTheme})(ColorPalette);