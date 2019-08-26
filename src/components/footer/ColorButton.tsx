import React from "react"
import styled from "styled-components"

const StyledColorButton = styled.div<{isActive: boolean}>`
    width: 20px;
    height: 20px;
    background-color: ${({color}) => color};
    border-radius: 50%;
    display: inline-block;
    margin: 0 0.25rem;
    opacity: ${p => (p.isActive && 1) || 0.2};
    &:hover {
        opacity: ${p => (p.isActive && 1) || 0.7};
        cursor: pointer;
    }
`

interface Props {
    color: string
    value: string
    isActive: boolean
    handleChangeTheme: (value: string) => void
}

const ColorButton: React.FC<Props> = ({color, value, isActive, handleChangeTheme}) => (
    <StyledColorButton
        color={color}
        isActive={isActive}
        onClick={() => handleChangeTheme(value)}
    />
)

export default ColorButton
