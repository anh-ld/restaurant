import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const $Bill = styled.div`
  color: #5AAC44;
  width: 100%;
  text-align: center;
  padding: 0.5rem 0;
  font-size: 1.5rem;
`
const Unit = styled.span`
  font-size: 1rem;
`

class Bill extends Component {
  render() {
    let total = 0;
    const { items } = this.props;
    for (let i = 0; i < items.length; i++) {
      total += items[i].price * items[i].quantity;
    }
    return (
      <$Bill>
        Total: {total}<Unit>$</Unit>
      </$Bill>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.tableData[state.selectedTable]
  }
}

export default connect(mapStateToProps, null)(Bill);