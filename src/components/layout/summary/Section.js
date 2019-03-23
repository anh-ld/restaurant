import React from 'react';
import styled from 'styled-components';
import {media} from "../../../utils/styling";

const $Section = styled.div`
  margin-right: 5rem;
  display: inline-block;
  ${media.desktop`
    margin-right: 2.8rem;
  `}
  ${media.tablet`
    margin-right: 2.5rem;
  `}
  ${media.phone`
    margin-right: 1.8rem;
  `}
`;

const Title = styled.p`
  margin: 0 0 0.5rem 0;
  text-transform: uppercase;
  color: #676D70;
  font-size: 0.8rem;
  font-weight: 600;
  ${media.phone`
    font-size: 0.7rem;
    margin: 0;
  `}
`;

const Content = styled.span`
  font-size: 2.2rem;
  color: #CD5A91;
  ${media.phone`
    font-size: 1.8rem;
  `}
`;

const Unit = styled.span`
  font-size: 1.8rem;
  color: #555555;
  ${media.phone`
    font-size: 1.5rem;
  `}
`;

const Section = ({title, content, unit}) => {
	return (
		<$Section>
			<Title>{title}</Title>
			<Content>{content}</Content>
			<Unit>{unit}</Unit>
		</$Section>
	);
};

export default Section;