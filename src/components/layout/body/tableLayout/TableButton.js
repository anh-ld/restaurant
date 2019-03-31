import React from 'react';
import {connect} from "react-redux";
import selectTable from '../../../../actions/orderActions/selectTable';
import styled from 'styled-components';
import {buttonMainStyle, media} from '../../../../utils/styling';

const Button = styled.button`
  ${buttonMainStyle}
  font-size: 2rem;
  width: 75px;
  height: 75px;
  margin: 0 1rem;
  ${media.tablet`
    margin-bottom: 0.5rem;
  `}
`;

const $TableButton = styled(Button)`
  background-color: ${({color}) => color['100']};
  color: #333333;
  &:hover, &:active {
    background-color: ${({color}) => color['400']};
  }
  
`;

const SelectedTableButton = styled(Button)`
  background-color: ${({color}) => color['400']};
  color: #333333;
`;

const TableButton = ({tableStatusData, id, onSelect, theme}) => {
	if (tableStatusData[id]) {
		return (
			<SelectedTableButton
				color={theme}
				onClick={() => onSelect(id)}
			>
				{id}
			</SelectedTableButton>
		)
	}

	return (
		<$TableButton
			color={theme}
			onClick={() => onSelect(id)}
		>
			{id}
		</$TableButton>
	);
};

const mapStateToProps = state => {
	return {
		tableStatusData: state.tableStatusData,
		theme: state.theme.palette
	}
};

const mapDispatchToProps = dispatch => {
	return {
		onSelect: (id) => {
			dispatch(selectTable(id));
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(TableButton);