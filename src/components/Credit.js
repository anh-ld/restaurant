import React, { Component } from 'react';
import styled from 'styled-components';

const $Credit = styled.p`
  color: #B7DDB0;
  text-align: center;
  margin: 0 auto;
  padding: 1rem;
`

const Link = styled.a`
  &:link, &:visited {
    color: #B7DDB0;
  }
  &:active, &:hover {
    color: #7BC86C;
  }
`

class Credit extends Component {
  render() {
    return (
      <$Credit>
        made by&nbsp;
        <Link
          href="https://github.com/culee" target="_blank"
          rel="noopener noreferrer"
        >
          @culee
        </Link>
      </$Credit>
    );
  }
}

export default Credit;