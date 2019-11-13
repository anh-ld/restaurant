import React from 'react'
import styled from 'styled-components'

const Link = styled.a`
    color: ${p => p.theme['700']};
    text-decoration: underline;
    text-decoration-thickness: 3px;
    text-underline-offset: 1px;
    font-weight: 500;
    &:hover {
        cursor: pointer;
        color: ${p => p.theme['800']};
    }
    &:active {
        cursor: default;
        color: ${p => p.theme['900']};
    }
`

export default Link