import React from "react"
import ReactDOM from 'react-dom'
import styled from "styled-components"
import Button from './Button'
import Heading from './Heading'
import Pane from './Pane'

const BackDrop = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 3rem;
    z-index: 1;
`

const StyledModal = styled(p => <Pane {...p} />)`
    margin: 0 auto;
    width: 600px;
`

const Header = styled.div`
    display: flex;
    justify-content: space-between;
`

const Title = styled(p => <Heading variant='medium' {...p} />)`
    color: ${p => p.theme['600']};
`

const CloseButton = styled(props => <Button {...props} />)`
    width: initial;
    padding: 0 8px;
    line-height: 24px;
`

interface Props {
    show: boolean
    toggleModal: () => void
    title: string
    children: React.ReactNode
}

const Modal: React.FC<Props> = ({show, toggleModal, title, children}) => {
    if (!show) {
        return null
    }

    return ReactDOM.createPortal((
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
    ), document.body)
}

export default Modal
