import React from 'react';
import styled from 'styled-components';
import { media } from '../../utils/styling';

const $Spinner = styled.h1`
  color: #CD5A91;
  text-align: center;
  margin: 0 auto;
  padding: calc(50vh - 1.5rem) 0;
  ${media.tablet`
    font-size: 1.45rem;
  `}
  ${media.phone`
    font-size: 1.15rem;
  `}
`;

const Loading = () => (
  <$Spinner>loading...</$Spinner>
);

export default Loading;