import React from "react"
import styled from "styled-components"

const StyledCredit = styled.span`
    color: ${p => p.theme['400']};
    text-align: center;
    margin: 0;
    padding: 0;
`

const Link = styled.a`
    &:link,
    &:visited {
        color: ${p => p.theme['400']};
    }
    &:active,
    &:hover {
        color: ${p => p.theme['600']};
    }
`

const Credit: React.FC<{}> = () => (
    <StyledCredit>
        made by&nbsp;
        <Link
            href="https://github.com/culee"
            target="_blank"
            rel="noopener noreferrer"
        >
            @culee
        </Link>
    </StyledCredit>
)

export default Credit
