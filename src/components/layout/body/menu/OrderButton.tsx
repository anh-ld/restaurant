import React from "react"
import {connect} from "react-redux"
import addTableItem from "Action/orderActions/addTableItem"
import Button from 'Atom/Button'
import {State} from "Type/store"

interface Props {
    name: string
    price: number
    selectedTable: number
    tableStatusData: Array<boolean>
    onAdd: (name: string, price: number, selectedTable: number) => void
}

const OrderButton: React.FC<Props> = ({selectedTable, tableStatusData, onAdd, name, price}) => (
    <Button
        disabled={selectedTable === null || !tableStatusData[selectedTable]}
        onClick={() => onAdd(name, price, selectedTable)}
    >
        {name}
    </Button>
)

const mapStateToProps = (state: State) => ({
    selectedTable: state.selectedTable,
    tableStatusData: state.tableStatusData
})

const mapDispatchToProps = (dispatch: any) => ({
    onAdd: (name: string, price: number, tableId: number) => {
        dispatch(addTableItem(name, price, tableId))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(OrderButton)
