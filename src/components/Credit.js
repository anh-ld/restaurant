import React from 'react';
import styled from 'styled-components';

const $Credit = styled.p`
  color: #FF95D6;
  text-align: center;
  margin: 0 auto;
  padding: 1rem;
`;

const Link = styled.a`
  &:link, &:visited {
    color: #FF95D6;
  }
  &:active, &:hover {
    color: #E76EB1;
  }
`;

const Credit = () => {
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
};

export default Credit;