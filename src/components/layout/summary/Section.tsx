import React from "react"
import styled from "styled-components"
import {media} from "../../../utils/styling"

const StyledSection = styled.div`
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
`

const Title = styled.p`
    margin: 0 0 0.5rem 0;
    text-transform: uppercase;
    color: #676d70;
    font-size: 0.8rem;
    font-weight: 600;
    ${media.phone`
        font-size: 0.7rem;
        margin: 0;
    `}
`

const Content = styled.span`
    font-size: 2.2rem;
    color: ${p => p.theme['600']};
    ${media.phone`
        font-size: 1.8rem;
    `}
`

const Unit = styled.span`
    font-size: 1.8rem;
    color: #555555;
    ${media.phone`
        font-size: 1.5rem;
    `}
`

interface Props {
    title: string
    content: number
    unit: string
    unitBefore?: boolean
}

const Section: React.FC<Props> = ({title, content, unit, unitBefore}) => (
    <StyledSection>
        <Title>{title}</Title>
        {unitBefore && <Unit>{unit}</Unit>}
        <Content>{content}</Content>
        {!unitBefore && <Unit>{unit}</Unit>}
    </StyledSection>
)

export default Section
