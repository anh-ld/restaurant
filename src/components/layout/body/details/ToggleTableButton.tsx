import React from "react"
import {connect} from "react-redux"
import toggleTable from "../../../../actions/orderActions/toggleTable"
import checkoutTable from "../../../../actions/orderActions/checkoutTable"
import clearSelectedTable from "../../../../actions/orderActions/clearSelectedTable"
import styled from "styled-components"
import Button from '../../../atom/Button'
import {CustomerData, State, TableDataType} from "../../../../types/store"

const ToggleButton = styled(props => <Button {...props} />)`
    font-size: 1.5rem;
    padding: 0.5rem 0;
    width: 100%;
`

const CheckInButton = styled(props => <ToggleButton {...props} />)`
    background-color: ${p => p.theme['600']};
    color: #FFFFFF;
    &:hover,
    &:active {
        background-color: ${p => p.theme['700']};
    }
    &:disabled {
        color: #a5acb0;
        background-color: #edeff0;
        cursor: not-allowed;
    }
`

const CheckOutButton = styled(props => <ToggleButton {...props} />)`
    background-color: #d6dadc;
    color: #333333;
    &:hover,
    &:active {
        background-color: #838c91;
        color: #FFFFFF;
    }
`

interface Props {
    selectedTable: number
    tableData: Array<Array<TableDataType>>
    uid: string
    dataHistory: Array<CustomerData>
    tableStatus: boolean
    onCheckOut: (selectedTable: number, tableData: Array<Array<TableDataType>>, uid: string, dataHistory: Array<CustomerData>) => void
    onToggle: (selectedTable: number) => void

}

const ToggleTableButton: React.FC<Props> = ({selectedTable, tableData, uid, dataHistory, tableStatus, onCheckOut, onToggle}) => {
    const handleClick = () => {
        if (tableStatus) {
            onCheckOut(selectedTable, tableData, uid, dataHistory)
        }
        onToggle(selectedTable)
    }

    if (tableStatus) {
        return (
            <CheckOutButton onClick={handleClick}>
                Checkout #{selectedTable}
            </CheckOutButton>
        )
    }

    return (
        <CheckInButton
            disabled={selectedTable === null}
            onClick={handleClick}
        >
            {selectedTable ? "Checkin #" + selectedTable : "Checkin"}
        </CheckInButton>
    )
}

const mapStateToProps = (state: State) => ({
    selectedTable: state.selectedTable,
    tableStatus: state.tableStatusData[state.selectedTable],
    tableData: state.tableData,
    uid: state.user.uid,
    dataHistory: state.dataHistory
})

const mapDispatchToProps = (dispatch: any) => {
    return {
        onToggle: (id: number) => {
            dispatch(toggleTable(id))
        },
        onCheckOut: (id: number, tableData: Array<Array<TableDataType>>, uid: string, dataHistory: Array<CustomerData>) => {
            const total: number = tableData[id].reduce((total: number, item: TableDataType) => {
                return total + item.price * item.quantity
            }, 0)

            dispatch(clearSelectedTable())
            dispatch(checkoutTable(total, dataHistory, uid))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToggleTableButton)
