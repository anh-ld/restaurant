import React from "react"
import OrderButton from "./menu/OrderButton"
import menu from "Util/menu"
import styled from "styled-components"
import {Item, MenuType} from "Type/action"
import Tabs from 'Atom/Tabs'

const StyledTab = styled.div`
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 8px;
`

interface TabProps {
    subMenu: Array<Item>
}

const Tab: React.FC<TabProps> = ({subMenu}) => (
    <StyledTab className='dg'>
        {subMenu.map((item: Item, index: number) => (
            <OrderButton name={item.name} price={item.price} key={index}/>
        ))}
    </StyledTab>
)

const Menu: React.FC<{}> = () => {
    const tabs = menu.map((item: MenuType) => {
        return {label: item.category, content: <Tab subMenu={item.dishes} />}
    })

    return (
        <Tabs tabs={tabs} contentHeight={200} />
    )
}

export default Menu
