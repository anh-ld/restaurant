import React, {useState, memo} from "react"
import {connect} from "react-redux"
import Modal from "../atom/Modal"
import CheckOutAlert from "./header/CheckOutAlert"
import {signOut} from "../../actions/userActions/signOut"
import styled from "styled-components"
import {transform, getDMY} from "../../utils/date"
import {State} from "../../types/store"
import Button from '../atom/Button'
import Heading from '../atom/Heading'

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0;
`

const Title = styled(p => <Heading variant='large' {...p} />)`
    color: ${p => p.theme['900']}
`

const Date = styled(p => <Heading variant='medium' {...p} />)`
    display: inline-block;
    color: ${p => p.theme['N700']}
`

const SignOutButton = styled(p => <Button variant='invert' {...p} />)`
    width: inherit;
    padding: 0 8px;
    margin-left: 8px;
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
                <Date>{transform(date)}/{transform(month)}/{year}</Date>
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
