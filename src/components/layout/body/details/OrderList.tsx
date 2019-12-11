import React, {useEffect, useRef} from "react"
import {connect} from "react-redux"
import deleteTableItem from "Action/orderActions/deleteTableItem"
import addTableItem from "Action/orderActions/addTableItem"
import styled from "styled-components"
import {State, TableDataType} from "Type/store"
import Button from "Atom/Button"
import {transform} from 'Util/date'
import Group from "Atom/Group"

const StyledOrderList = styled.div`
    height: 240px;
`

const ActionButton = styled(props => <Button {...props} />)`
    width: 50%;
    font-size: 18px;
    line-height: 24px;
    font-weight: 900;
`

const Row = styled.div`
    display: flex;
    line-height: 36px;
    border-bottom: 2px solid ${p => p.theme.N200};

    > div:first-child { flex: 4; }
    > div:nth-child(2), div:nth-child(3) { flex: 1; }
    > div:last-child { 
        flex: 2; 
        padding-right: 8px;
    }
`

const HeadingRow = styled(p => <Row {...p} />)`
    border-bottom: 2px solid ${p => p.theme.N200};
`

const DataRow = styled(p => <Row {...p} />)`
    border-bottom: 2px solid ${p => p.theme.N100};
    color: ${p => p.theme.N800};
`

const Data = styled.div`
    height: 204px;
    overflow-y: scroll;

    ::-webkit-scrollbar {
		width: 8px;
		height: 8px;
		background: ${p => p.theme['400']};
	}
	::-webkit-scrollbar-thumb {
		background: ${p => p.theme['400']};
		border-radius: 8px;
	}
	::-webkit-scrollbar-track {
		background: ${p => p.theme.N100};
	}
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
            orderTable.current.scrollTo(0, 2000)
        }
        prevItems = items
    })

    if (!items)
        return null

    return (
        <StyledOrderList>
            <HeadingRow>
                <div>Item</div>
                <div>Price</div>
                <div>Qty.</div>
                <div>Actions</div>
            </HeadingRow>
            <Data ref={orderTable}>
            {items.map((item: TableDataType, i: number) => (
                <DataRow key={i}>
                    <div>{item.name}</div>
                    <div>
                        <span>$</span>
                        {item.price}
                    </div>
                    <div>{transform(item.quantity)}</div>
                    <Group.Button>
                        <ActionButton onClick={() => onDelete(selectedTable, i)}>
                            -
                        </ActionButton>
                        <ActionButton onClick={() => onAdd(item.name, item.price, selectedTable)}>
                            +
                        </ActionButton>
                    </Group.Button>
                </DataRow>
            ))}
            </Data>
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
