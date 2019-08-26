import React from "react"
import {connect} from "react-redux"
import addTableItem from "../../../../actions/orderActions/addTableItem"
import styled from "styled-components"
import Button from '../../../atom/Button'
import {State} from "../../../../types/store"

const StyledOrderButton = styled(props => <Button {...props} />)`
    font-size: 1rem;
    width: 100px;
    height: 50px;
    background-color: #e2e4e6;
    color: #333333;
    margin: 0.25rem 0;
    &:hover,
    &:active {
        background-color: #d6dadc;
    }
    &:disabled {
        color: #a5acb0;
        background-color: #edeff0;
        cursor: not-allowed;
    }
`

interface Props {
    name: string
    price: number
    selectedTable: number
    tableStatusData: Array<boolean>
    onAdd: (name: string, price: number, selectedTable: number) => void
}

const OrderButton: React.FC<Props> = ({selectedTable, tableStatusData, onAdd, name, price}) => {
    return (
        <StyledOrderButton
            disabled={selectedTable === null || !tableStatusData[selectedTable]}
            onClick={() => onAdd(name, price, selectedTable)}
        >
            {name}
        </StyledOrderButton>
    )
}

const mapStateToProps = (state: State) => ({
    selectedTable: state.selectedTable,
    tableStatusData: state.tableStatusData
})

const mapDispatchToProps = (dispatch: any) => {
    return {
        onAdd: (name: string, price: number, tableId: number) => {
            dispatch(addTableItem(name, price, tableId))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderButton)
