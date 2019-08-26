import React from "react"
import OrderButton from "./menu/OrderButton"
import menu from "../../../utils/menu"
import styled from "styled-components"
import {Item} from "../../../types/action"

const StyledMenu = styled.div`
    background-color: #FFFFFF;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const Menu: React.FC<any> = () => (
    <StyledMenu>
        {menu.map((item: Item, index: number) => (
            <OrderButton name={item.name} price={item.price} key={index}/>
        ))}
    </StyledMenu>
)

export default Menu
