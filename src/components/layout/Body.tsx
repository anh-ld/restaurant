import React from "react"
import Details from "./body/Details"
import TableLayout from "./body/TableLayout"
import Menu from "./body/Menu"
import styled from "styled-components"

const Wrapper = styled.div`
    margin: 24px 0 16px 0;
    height: 350px;
    grid-template-columns: 5fr 7fr;
    grid-gap: 16px;
`

const Body: React.FC<{}> = () => (
    <>
        <Wrapper className="dg">
            <Details/>
            <TableLayout/>
        </Wrapper>
        <Menu/>
    </>
)

export default Body
