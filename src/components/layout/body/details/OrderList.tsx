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
    flex: 1;
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

    > div:first-child { flex: 4; }
    > div:nth-child(2), div:nth-child(3) { flex: 1; }
    > div:last-child { 
        flex: 2; 
        padding-right: 8px;
    }
`

const HeadingRow = styled(p => <Row {...p} />)`
    border-bottom: 2px solid ${p => p.theme.N100};
`

const DataRow = styled(p => <Row {...p} />)`
    border-bottom: 2px solid ${p => p.theme.N0};
    color: ${p => p.theme.N800};
`

const Data = styled.div`
    height: 212px;
    overflow-y: auto;

    ::-webkit-scrollbar {
		width: 8px;
		height: 8px;
		background: ${p => p.theme['300']};
	}
	::-webkit-scrollbar-thumb {
		background: ${p => p.theme['300']};
		border-radius: 8px;
	}
	::-webkit-scrollbar-track {
		background: ${p => p.theme.N100};
	}
`

const Empty = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
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

    return (
        <StyledOrderList>
            {items.length ? (
                <>
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
                </>
            ) : <Empty>Please select a certain item.</Empty>}
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
