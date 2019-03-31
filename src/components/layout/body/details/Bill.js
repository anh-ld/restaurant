import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

const $Bill = styled.div`
  color: ${props => props.color['600']};
  width: 100%;
  text-align: center;
  padding: 0.5rem 0;
  font-size: 1.5rem;
`;
const Unit = styled.span`
  font-size: 1rem;
`;

const Bill = ({items, theme}) => {
	const total = items.reduce((total, item) => {
		return total + item.price * item.quantity;
	}, 0);

	return (
		<$Bill color={theme}>
			Total: {total}<Unit>$</Unit>
		</$Bill>
	);
};

const mapStateToProps = state => {
	return {
		items: state.tableData[state.selectedTable],
		theme: state.theme.palette
	}
};

export default connect(mapStateToProps)(Bill);