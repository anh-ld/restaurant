import React from "react"
import OrderButton from "./menu/OrderButton"
import menu from "Util/menu"
import styled from "styled-components"
import {Item} from "Type/action"
import Pane from 'Atom/Pane'

const StyledPane = styled(p => <Pane {...p} />)`
    grid-template-columns: repeat(7, 1fr);
    grid-gap: 8px;
`
const Menu: React.FC<{}> = () => (
    <StyledPane className='dg'>
        {menu.map((item: Item, index: number) => (
            <OrderButton name={item.name} price={item.price} key={index}/>
        ))}
    </StyledPane>
)

export default Menu
