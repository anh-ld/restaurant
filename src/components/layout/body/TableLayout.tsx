import React from "react"
import TableButton from "./tableLayout/TableButton"
import styled from "styled-components"
import Pane from 'Atom/Pane'
import {connect} from 'react-redux'
import {State} from 'Type/store'

const StyledLayout = styled(p => <Pane {...p} />)`
    grid-template-columns: repeat(5, 1fr);
`

interface TableLayoutProps {
    tableStatusData: Array<boolean>
}

const TableLayout: React.FC<TableLayoutProps> = ({tableStatusData}) => {
    const tableIDs: Array<number> = Array.from(Array(15).keys())

    return (
        <StyledLayout className="dg">
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

export default connect(mapStateToProps)(TableLayout)
