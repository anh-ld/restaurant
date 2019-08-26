import React from "react"
import Details from "./body/Details"
import TableLayout from "./body/TableLayout"
import Menu from "./body/Menu"
import styled from "styled-components"

const Wrapper = styled.div`
    display: grid;
    margin: 24px 0 16px 0;
    height: 350px;
    grid-template-columns: 3fr 5fr;
    grid-gap: 16px;
`

const Body: React.FC<{}> = () => (
    <>
        <Wrapper>
            <Details/>
            <TableLayout/>
        </Wrapper>
        <Menu/>
    </>
)

export default Body
