import React, {useState} from "react"
import {connect} from "react-redux"
import TableData from "./summary/TableData"
import Modal from "Atom/Modal"
import Section from "./summary/Section"
import styled from "styled-components"
import {State} from "Type/store"
import Button from 'Atom/Button'
import Heading from 'Atom/Heading'

const StyledSummary = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Name = styled(p => <Heading variant='medium' {...p} />)`
    display: inline-block;
    color: ${p => p.theme['N700']};
`

const HistoryButton = styled(p => <Button {...p} />)`
    width: initial;
    padding: 0 8px; 
    margin-left: 8px;
`

interface Props {
    moneyEarned: number
    customer: number
    user: any
    tableStatusData: Array<boolean>
}

const Summary: React.FC<Props> = ({tableStatusData, moneyEarned, customer, user}) => {
    const [showDataHistory, setShowDataHistory] = useState(false)
    const occupiedTable: number = tableStatusData.filter(
        (tableStatus: boolean) => tableStatus === true
    ).length

    return (
        <StyledSummary>
            <div>
                <Section title="Occupied Table" content={occupiedTable} unit="/15"/>
                <Section title="Money" content={moneyEarned} unit="$" unitBefore/>
                <Section title="Customer" content={customer} unit=""/>
            </div>
            <div>
                <Name>{user.displayName ? user.displayName : "Anonymous"}</Name>
                <HistoryButton
                    onClick={() => setShowDataHistory(!showDataHistory)}
                >
                    History
                </HistoryButton>
            </div>
            <Modal
                show={showDataHistory}
                toggleModal={() => setShowDataHistory(!showDataHistory)}
                title="History"
            >
                <TableData/>
            </Modal>
        </StyledSummary>
    )
}

const mapStateToProps = (state: State) => ({
    tableStatusData: state.tableStatusData,
    moneyEarned: state.moneyEarned,
    customer: state.totalCustomer,
    user: state.user
})

export default connect(mapStateToProps)(Summary)
