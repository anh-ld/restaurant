import React from "react"
import {connect} from "react-redux"
import addTableItem from "Action/orderActions/addTableItem"
import Button from 'Atom/Button'
import {State} from "Type/store"

interface Props {
    name: string
    price: number
    selectedTable: number | null
    onAdd: (name: string, price: number, selectedTable: number) => void
}

const OrderButton: React.FC<Props> = ({selectedTable, onAdd, name, price}) => (
    <Button onClick={() => onAdd(name, price, selectedTable)} >
        {name}
    </Button>
)

const mapDispatchToProps = (dispatch: any) => ({
    onAdd: (name: string, price: number, tableId: number) => {
        dispatch(addTableItem(name, price, tableId))
    }
})

export default connect(null, mapDispatchToProps)(OrderButton)
