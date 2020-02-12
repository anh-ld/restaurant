import React from 'react'
import styled from 'styled-components'

const BaseButton = styled.button`
    font-size: 24px;
    padding: 0;
    margin: 0;
    line-height: 48px;
    border-radius: 4px;
    border: none;
    outline: none;
    font-family: 'horizon_roundedbold';
    
    &&[disabled] {
        cursor: not-allowed;
        pointer-events: none;
        color: ${p => p.theme['N300']};
        background-color: ${p => p.theme['N100']};
    }
`

const MainButton = styled(BaseButton)`
    color: ${p => p.theme['N0']};
    background-color: ${p => p.theme['700']};;
    &:hover {
        cursor: pointer;
        background-color: ${p => p.theme['800']};
    }
    &:active {
        cursor: default;
        background-color: ${p => p.theme['900']};
    }
`

const InvertButton = styled(BaseButton)`
    color: ${p => p.theme['700']};
    background-color: ${p => p.theme['N0']};
    &:hover {
        cursor: pointer;
        background-color: ${p => p.theme['N200']};
    }
    &:active {
        cursor: default;
        background-color: ${p => p.theme['N300']};
    }
`

const TransparentButton = styled(BaseButton)`
    color: ${p => p.theme.N700};
    background: transparent;
    border-radius: 0;
    &:hover {
        cursor: pointer;
        color: ${p => p.theme['700']};
    }
    &:active {
        cursor: default;
        color: ${p => p.theme['800']};
    }
`

interface Props {
    variant?: 'invert' | 'main' | 'transparent'
    children?: React.ReactNode
    [key: string]: any
}

const Button: React.FC<Props> = ({variant, children, ...rest}) => {
    switch (variant) {
        case 'invert':
            return (<InvertButton {...rest}>{children}</InvertButton>)
        case 'transparent':
            return (<TransparentButton {...rest}>{children}</TransparentButton>)
        case 'main':
        default:
            return (<MainButton {...rest}>{children}</MainButton>)
    }
}

export default Button