import React, {useEffect, useRef} from "react"
import {connect} from "react-redux"
import deleteTableItem from "Action/orderActions/deleteTableItem"
import addTableItem from "Action/orderActions/addTableItem"
import styled from "styled-components"
import {State, TableDataType} from "Type/store"
import Button from "Atom/Button"

const StyledOrderList = styled.div`
    height: 240px;
    overflow-y: scroll;
`

const Table = styled.table`
    width: 100%;
    position: relative;
    border-collapse: collapse;
`

const TableHead = styled.th`
    text-align: left;
    padding: 0.5rem 0.2rem;
    border-bottom: 1px solid #edeff0;
    position: sticky;
    top: 0;
    background-color: #FFFFFF;
`

const TableData = styled.td`
    border-collapse: collapse;
    padding: 0.4rem 0.2rem;
    border-bottom: 1px solid #f8f9f9;
    color: #333333;
    
    &:last-child {
        display: flex;
        button ~ button {
            margin-left: 4px;
        }
    }
`

const ActionButton = styled(props => <Button {...props} />)`
    width: 50%;
    font-size: 16px;
    line-height: 24px;
`

interface Props {
    items: Array<TableDataType>
    selectedTable: number
    onAdd: (name: string, price: number, selectedTable: number) => void
    onDelete: (selectedTable: number, i: number) => void
}

let prevItems: Array<TableDataType> = []

const OrderList: React.FC<Props> = ({items, selectedTable, onAdd, onDelete}) => {
    const orderTable = useRef(null)

    useEffect(() => {
        if (items && items.length > prevItems.length) {
            orderTable.current.scrollIntoView(false)
        }
        prevItems = items
    })

    return (
        <StyledOrderList>
            {!items ? null : (
                <Table ref={orderTable}>
                    <thead>
                    <tr>
                        <TableHead>Item</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead>Quantity</TableHead>
                        <TableHead>Actions</TableHead>
                    </tr>
                    </thead>
                    <tbody>
                    {items.map((item: TableDataType, i: number) => (
                        <tr key={i}>
                            <TableData>{item.name}</TableData>
                            <TableData>{item.price} $</TableData>
                            <TableData>{item.quantity}</TableData>
                            <TableData>
                                <ActionButton onClick={() => onDelete(selectedTable, i)}>
                                    -
                                </ActionButton>
                                <ActionButton
                                    onClick={() =>
                                        onAdd(item.name, item.price, selectedTable)
                                    }
                                >
                                    +
                                </ActionButton>
                            </TableData>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            )}
        </StyledOrderList>
    )
}

const mapStateToProps = (state: State) => ({
    selectedTable: state.selectedTable,
    items: state.tableData[state.selectedTable]
})

const mapDispatchToProps = (dispatch: any) => ({
    onDelete: (tableId: number, id: number) => {
        dispatch(deleteTableItem(tableId, id))
    },
    onAdd: (name: string, price: number, tableId: number) => {
        dispatch(addTableItem(name, price, tableId))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(OrderList)
