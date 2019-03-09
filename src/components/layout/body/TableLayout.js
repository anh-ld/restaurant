import React, { Component } from 'react';
import TableButton from './tableLayout/TableButton';
import styled from 'styled-components';
import media from '../../../utils/mediaQueriesStyling';

const $Layout = styled.div`
  background-color: #FFF;
  padding: 0.5rem;
  border-radius: 0.25rem;
  width: calc(960px - 332px);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  ${media.tablet`
    width: initial;
    height: initial;
  `}
`

class TableLayout extends Component {
  render() {
    return (
      <$Layout>
        <TableButton id={1}/>
        <TableButton id={2}/>
        <TableButton id={3}/>
        <TableButton id={4}/>
        <TableButton id={5}/>
        <TableButton id={6}/>
        <TableButton id={7}/>
        <TableButton id={8}/>
        <TableButton id={9}/>
        <TableButton id={10}/>
        <TableButton id={11}/>
        <TableButton id={12}/>
        <TableButton id={13}/>
        <TableButton id={14}/>
        <TableButton id={15}/>
      </$Layout>
    );
  }
}

export default TableLayout;