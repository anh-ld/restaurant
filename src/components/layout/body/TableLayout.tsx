import React from "react"
import TableButton from "./tableLayout/TableButton"
import styled from "styled-components"
import Pane from 'Atom/Pane'
import {connect} from 'react-redux'
import {State} from 'Type/store'
import clearSelectedTable from 'Action/orderActions/clearSelectedTable'

const StyledLayout = styled(p => <Pane {...p} />)`
    grid-template-columns: repeat(5, 1fr);
`

interface TableLayoutProps {
    tableStatusData: Array<boolean>
    onClearSelectedTable: () => void
}

const TableLayout: React.FC<TableLayoutProps> = ({tableStatusData, onClearSelectedTable}) => {
    const tableIDs: Array<number> = Array.from(Array(15).keys())

    return (
        <StyledLayout className="dg" onClick={onClearSelectedTable}>
            {tableIDs.map((id: number) => (
                <TableButton
                    key={id}
                    id={id + 1} 
                    isSelected={tableStatusData[id + 1]} 
                />
            ))}
        </StyledLayout>
    )
}

const mapStateToProps = (state: State) => ({tableStatusData: state.tableStatusData})

const mapDispatchToProps = (dispatch: any) => ({
    onClearSelectedTable: () => {
        dispatch(clearSelectedTable())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(TableLayout)
