import React, {useState} from "react"
import {connect} from "react-redux"
import TableData from "./summary/TableData"
import Modal from "../atom/Modal"
import Section from "./summary/Section"
import styled from "styled-components"
import {media} from "../../utils/styling"
import Button from '../atom/Button'
import {State} from "../../types/store"

const StyledSummary = styled.div`
    display: flex;
    justify-content: space-between;
    ${media.tablet`
        display: block;
        margin-block-end: 0;
    `}
`

const DisplayName = styled.h2`
    margin: 0;
    line-height: 69px;
    display: inline-block;
    color: #676d70;
    ${media.tablet`
        font-size: 1.2rem;
        display: none;
        line-height: 0;
    `}
    ${media.phone`
        font-size: 1rem;
    `}
`

const HistoryButton = styled(props => <Button {...props} />)`
    font-size: 1.5rem;
    margin-left: 1rem;
    background-color: ${p => p.theme['600']};
    color: #FFFFFF;
    &:hover,
    &:active {
    background-color: ${p => p.theme['700']};
    }
    ${media.tablet`
        margin-left: 0;
        width: 100%;
        margin-top: 0.5rem;
        padding: 0.2rem 0;
    `}
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
                <DisplayName>
                    {user.displayName ? user.displayName : "Anon"}
                </DisplayName>
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
