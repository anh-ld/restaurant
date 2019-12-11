import React from 'react'
import styled from 'styled-components'

const ButtonGroup: React.FC<any> = ({ children }) => (
    <StyledButtonGroup>{children}</StyledButtonGroup>
)

const StyledButtonGroup = styled.div`
    & > button:first-child {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }
    & > button:last-child {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
    & > button:not(:last-child):not(:first-child) {
        border-radius: 0;
    }
`

export default {
    Button: ButtonGroup
}