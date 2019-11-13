import React from "react"
import TableButton from "./tableLayout/TableButton"
import styled from "styled-components"
import Pane from 'Atom/Pane'

const StyledLayout = styled(p => <Pane {...p} />)`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
`

const TableLayout: React.FC<{}> = () => {
    const tableIDs: Array<number> = Array.from(Array(15).keys())

    return (
        <StyledLayout>
            {tableIDs.map((id: number) => (
                <TableButton id={id + 1} key={id}/>
            ))}
        </StyledLayout>
    )
}

export default TableLayout
