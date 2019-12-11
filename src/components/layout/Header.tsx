import React, {useState} from "react"
import {connect} from "react-redux"
import Modal from "Atom/Modal"
import CheckOutAlert from "./header/CheckOutAlert"
import {signOut} from "Action/userActions/signOut"
import styled from "styled-components"
import {getDMY, transform} from "Util/date"
import {State} from "Type/store"
import Button from 'Atom/Button'
import Heading from 'Atom/Heading'

const StyledHeader = styled.div`
    padding: 8px 0;
`

const Title = styled(p => <Heading variant='large' {...p} />)`
    color: ${p => p.theme['900']}
`

const Date = styled(p => <Heading variant='medium' {...p} />)`
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
        <StyledHeader className="df jcsb aic">
            <Title>Paolo {"&"} Chi Westlake Restaurant</Title>
            <div>
                <Date className="dib">
                    {transform(date)}/{transform(month)}/{year}
                </Date>
                <SignOutButton onClick={handleClick}>
                    Go-out
                </SignOutButton>
            </div>
            {showAlert && (
                <Modal
                    title="Warning"
                    forceShow
                >
                    <CheckOutAlert/>
                </Modal>
            )}
        </StyledHeader>
    )
}

const mapStateToProps = (state: State) => ({tableStatusData: state.tableStatusData})

export default connect(mapStateToProps, {signOut})(Header)
