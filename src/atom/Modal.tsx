import React, {useState} from "react"
import {createPortal} from 'react-dom'
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
    max-height: 80vh;
    overflow: auto;
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
    title: string
    children: React.ReactElement
    from?: React.ReactElement
    forceShow?: boolean
}

const Modal: React.FC<Props> = ({title, children, from, forceShow}) => {
    const [show, setShow] = useState(forceShow || false)

    return (
        <>
            {from && React.cloneElement(from, {
                onClick: () => setShow(!show)
            })}
            {show && createPortal((
                <BackDrop onClick={() => setShow(false)}>
                    <StyledModal>
                        <Header>
                            <Title>{title}</Title>
                            <CloseButton onClick={() => setShow(false)}>
                                x
                            </CloseButton>
                        </Header>
                        {children}
                    </StyledModal>
                </BackDrop>
            ), document.body)}
        </>
    )
}

export default Modal
