import React from 'react';
import styled from 'styled-components';
import media from '../../utils/mediaQueriesStyling';

const $Spinner = styled.h1`
  color: #519839;
  text-align: center;
  margin: 0 auto;
  padding: calc(50vh - 1.5rem) 0;
  ${media.tablet`
    font-size: 1.45rem;
  `}
  ${media.phone`
    font-size: 1.15rem;
  `}
`

const Loading = () => (
  <$Spinner>Baking cake...er...I mean loading, yeah loading...</$Spinner>
);

export default Loading;