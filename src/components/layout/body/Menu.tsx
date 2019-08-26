import React from "react"
import OrderButton from "./menu/OrderButton"
import menu from "../../../utils/menu"
import styled from "styled-components"
import {Item} from "../../../types/action"
import Pane from '../../atom/Pane'

const StyledPane = styled(p => <Pane {...p} />)`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-gap: 8px;
`
const Menu: React.FC<{}> = () => (
    <StyledPane>
        {menu.map((item: Item, index: number) => (
            <OrderButton name={item.name} price={item.price} key={index}/>
        ))}
    </StyledPane>
)

export default Menu
