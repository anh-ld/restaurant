import React from "react"
import styled from "styled-components"
import {media} from "../../utils/styling"
import Button from './Button'

const BackDrop = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 3rem;
    z-index: 1;
    ${media.tablet`
        padding: 2rem;
    `}
    ${media.phone`
        padding: 1rem;
    `}
`

const StyledModal = styled.div`
    background-color: #FFFFFF;
    border-radius: 0.25rem;
    padding: 1rem;
    margin: 0 auto;
    max-width: 900px;
    ${media.phone`
        padding: 0.5rem;
    `}
`

const Header = styled.div`
    display: flex;
    justify-content: space-between;
`

const Title = styled.h2`
    line-height: initial;
    display: block;
    margin: 0;
    color: ${p => p.theme['600']};
`

const CloseButton = styled(props => <Button {...props} />)`
    font-size: 1.5rem;
    margin-left: 1rem;
    background-color: ${p => p.theme['600']};
    color: #FFFFFF;
    &:hover,
    &:active {
        background-color: ${p => p.theme['700']};
    }
`

const Modal: React.FC<any> = ({show, toggleModal, title, children}) => {
    if (!show) {
        return null
    }

    return (
        <BackDrop>
            <StyledModal>
                <Header>
                    <Title>{title}</Title>
                    <CloseButton onClick={toggleModal}>
                        x
                    </CloseButton>
                </Header>
                {children}
            </StyledModal>
        </BackDrop>
    )
}

export default Modal
