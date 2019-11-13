import React from "react"
import styled from "styled-components"
import Heading from 'Atom/Heading'

const StyledSection = styled.div`
    margin-right: 80px;
    display: inline-block;
`

const Content = styled.span`
    font-size: 2.2rem;
    color: ${p => p.theme['600']};
`

const Unit = styled.span`
    font-size: 1.8rem;
    color: ${p => p.theme['N700']};
`

interface Props {
    title: string
    content: number
    unit: string
    unitBefore?: boolean
}

const Section: React.FC<Props> = ({title, content, unit, unitBefore}) => (
    <StyledSection>
        <Heading variant='tiny'>{title}</Heading>
        {unitBefore && <Unit>{unit}</Unit>}
        <Content>{content}</Content>
        {!unitBefore && <Unit>{unit}</Unit>}
    </StyledSection>
)

export default Section
