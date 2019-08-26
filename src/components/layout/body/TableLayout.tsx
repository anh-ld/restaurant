import React from "react"
import TableButton from "./tableLayout/TableButton"
import styled from "styled-components"
import {media} from "../../../utils/styling"

const StyledLayout = styled.div`
    background-color: #FFFFFF;
    padding: 0.5rem;
    border-radius: 0.25rem;
    width: calc(960px - 332px);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    ${media.tablet`
        width: initial;
        height: initial;
    `}
`

const TableLayout: React.FC<{}> = () => {
    const tableIDs: any = Array.from(Array(15).keys())

    return (
        <StyledLayout>
            {tableIDs.map((id: number) => (
                <TableButton id={id + 1} key={id}/>
            ))}
        </StyledLayout>
    )
}

export default TableLayout
