import React, {useState} from "react"
import {connect} from "react-redux"
import Modal from "../atom/Modal"
import CheckOutAlert from "./header/CheckOutAlert"
import {signOut} from "../../actions/userActions/signOut"
import styled from "styled-components"
import {media} from "../../utils/styling"
import {transform, getDMY} from "../../utils/date"
import Button from '../atom/Button'
import {State} from "../../types/store"

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
`

const Title = styled.h1`
    color: ${p => p.theme['800']};
    ${media.tablet`
        font-size: 1.5rem;
    `}
    ${media.phone`
        font-size: 1.2rem;
    `}
`

const Date = styled.h2`
    display: inline-block;
    line-height: 2.5rem;
    font-weight: 500;
    color: #333333;
    ${media.tablet`
        font-size: 1.2rem;
        line-height: 2.25rem;
    `}
    ${media.phone`
        font-size: 1rem;
        line-height: 1.75rem;
    `}
`

const SignOutButton = styled(props => <Button {...props} />)`
    font-size: 1.5rem;
    background-color: #FFFFFF;
    color: ${p => p.theme['600']};
    margin-left: 1rem;
    padding: 0 0.5rem;
    &:hover,
    &:active {
        color: #FFFFFF;
        background-color: ${p => p.theme['700']};
    }
    ${media.tablet`
        font-size: 1.2rem;
        margin-left: 0.25rem;
        padding: 0.25rem;
        width: initial;
    `}
    ${media.phone`
        font-size: 1rem;
        width: initial;
    `}
`

interface Props {
    tableStatusData: Array<boolean>
    signOut: () => void
}

const Header: React.FC<Props> = ({tableStatusData, signOut}) => {
    const {date, month, year} = getDMY()
    const [showAlert, setShowAlert] = useState(false)

    const handleClick = () => {
        if (tableStatusData.includes(true)) {
            setShowAlert(!showAlert)
        } else {
            signOut()
        }
    }

    return (
        <StyledHeader>
            <Title>Hanoi Pizza Restaurant</Title>
            <div>
                <Date>
                    {transform(date)}/{transform(month)}/{year}
                </Date>
                <SignOutButton onClick={handleClick}>
                    Go-out
                </SignOutButton>
            </div>
            <Modal
                show={showAlert}
                toggleModal={() => setShowAlert(!showAlert)}
                title="Warning"
            >
                <CheckOutAlert/>
            </Modal>
        </StyledHeader>
    )
}

const mapStateToProps = (state: State) => ({tableStatusData: state.tableStatusData})

export default connect(mapStateToProps, {signOut})(Header)
