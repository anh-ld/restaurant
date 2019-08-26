import React, {useRef, useEffect, RefObject} from "react"
import {connect} from "react-redux"
import deleteTableItem from "../../../../actions/orderActions/deleteTableItem"
import addTableItem from "../../../../actions/orderActions/addTableItem"
import styled from "styled-components"
import {media} from "../../../../utils/styling"
import Button from "../../../atom/Button"
import {State, TableDataType} from "../../../../types/store"

const StyledOrderList = styled.div`
    height: 248px;
    overflow-y: scroll;
    ${media.desktop`
        height: 323px;
    `}
    ${media.tablet`
        height: 248px;
    `}
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
`

const ActionButton = styled(props => <Button {...props} />)`
    background-color: #f8f9f9;
    font-weight: 900;
    width: 50%;
    font-size: 1rem;
    &:hover,
    &:active {
        background-color: #edeff0;
    }
`

interface Props {
    items: Array<TableDataType>
    selectedTable: number
    onAdd: (name: string, price: number, selectedTable: number) => void
    onDelete: (selectedTable: number, i: number) => void
}

const OrderList: React.FC<any> = ({items, selectedTable, onAdd, onDelete}) => {
    const orderTable = useRef<RefObject<HTMLTableElement>>(null)
    useEffect(() => {
        if (items) {
            orderTable.current.scrollIntoView(false)
        }
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
                    {items.map((item: TableDataType, i: number) => {
                        return (
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
                        )
                    })}
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

const mapDispatchToProps = (dispatch: any) => {
    return {
        onDelete: (tableId: number, id: number) => {
            dispatch(deleteTableItem(tableId, id))
        },
        onAdd: (name: string, price: number, tableId: number) => {
            dispatch(addTableItem(name, price, tableId))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderList)
