import React from "react"
import {connect} from "react-redux"
import toggleTable from "Action/orderActions/toggleTable"
import checkoutTable from "Action/orderActions/checkoutTable"
import clearSelectedTable from "Action/orderActions/clearSelectedTable"
import styled from "styled-components"
import {CustomerData, State, TableDataType} from "Type/store"
import Button from 'Atom/Button'

const CheckInButton = styled(props => <Button {...props} />)`
    width: 100%;
`

const CheckOutButton = styled(props => <Button variant='invert' {...props} />)`
    width: 100%;
    background-color: ${p => p.theme['N100']};
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

const mapDispatchToProps = (dispatch: any) => ({
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
})

export default connect(mapStateToProps, mapDispatchToProps)(ToggleTableButton)
