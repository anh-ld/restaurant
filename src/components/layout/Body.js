import React, { Component } from 'react';
import Details from './body/Details';
import TableLayout from './body/TableLayout';
import Menu from './body/Menu';
import styled from 'styled-components';
import media from '../../utils/mediaQueriesStyling';

const Wrapper = styled.div`
  display: flex;
  margin: 1.5rem 0 1rem 0;
  height: 350px;
  ${media.desktop`
    height: 425px;
  `}
  ${media.tablet`
    display: block;
    height: initial;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  `}
`

class Body extends Component {
  render() {
    return (
      <React.Fragment>
        <Wrapper>
          <Details />
          <TableLayout />
        </Wrapper>
        <Menu />
      </React.Fragment>
    );
  }
}

export default Body;