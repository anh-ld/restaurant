import React from "react"
import {connect} from "react-redux"
import TableData from "./summary/TableData"
import Modal from "Atom/Modal"
import Section from "./summary/Section"
import styled from "styled-components"
import {State} from "Type/store"
import Button from 'Atom/Button'
import Heading from 'Atom/Heading'

const Name = styled(p => <Heading variant='medium' {...p} />)`
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
    const occupiedTable: number = tableStatusData.filter(
        (tableStatus: boolean) => tableStatus === true
    ).length

    return (
        <div className="df jcsb aic">
            <div>
                <Section title="Occupied Table" content={occupiedTable} unit="/15"/>
                <Section title="Money" content={moneyEarned} unit="$" unitBefore/>
                <Section title="Customer" content={customer} unit=""/>
            </div>
            <div>
                <Name className="dib">
                    {user.displayName ? user.displayName : "Anonymous"}
                </Name>
                <Modal
                    title="History"
                    from={<HistoryButton>History</HistoryButton>}
                >
                    <TableData />
                </Modal>
            </div>
        </div>
    )
}

const mapStateToProps = (state: State) => ({
    tableStatusData: state.tableStatusData,
    moneyEarned: state.moneyEarned,
    customer: state.totalCustomer,
    user: state.user
})

export default connect(mapStateToProps)(Summary)
