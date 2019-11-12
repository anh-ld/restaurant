import React from "react"
import styled from "styled-components"

const BaseButton = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 4px;
    display: inline-block;
    margin: 0 0.25rem;
    &:hover {
        cursor: pointer;
    }
`

const StyledColorButton = styled(p => <BaseButton {...p} />)<{isActive: boolean}>`
    background-color: ${({color}) => color};
    opacity: ${p => (p.isActive && 1) || 0.2};
    &:hover {
        opacity: ${p => (p.isActive && 1) || 0.7};
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
