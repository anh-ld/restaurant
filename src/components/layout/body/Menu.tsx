import React from "react"
import OrderButton from "./menu/OrderButton"
import styled from "styled-components"
import {Item, MenuType} from "Type/action"
import Tabs from 'Atom/Tabs'
import {connect} from 'react-redux'
import {State} from "Type/store"
import {menu} from 'Util/menu.json'

const StyledTab = styled.div`
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 8px;
`

interface TabProps {
    subMenu: Array<Item>
    selectedTable: number | null
}

interface MenuProps {
    selectedTable: number | null
    tableStatusData: Array<boolean>
}

const Tab: React.FC<TabProps> = ({subMenu, selectedTable}) => (
    <StyledTab className='dg'>
        {subMenu.map((item: Item, index: number) => (
            <OrderButton 
                name={item.name} 
                price={item.price} 
                key={index} 
                selectedTable={selectedTable} 
            />
        ))}
    </StyledTab>
)

const Menu: React.FC<MenuProps> = ({selectedTable, tableStatusData}) => {
    const tabs = menu.map((item: MenuType) => (
        {label: item.category, content: <Tab subMenu={item.dishes} selectedTable={selectedTable} />}
    ))

    return (
        <Tabs 
            tabs={tabs} 
            contentHeight={200}
            disabled={selectedTable === null || !tableStatusData[selectedTable]}
            disableMessage={selectedTable === null ? 'Please select a table.' : "Please checkin table before browsing menu."}
        />
    )
}

const mapStateToProps = (state: State) => ({
    selectedTable: state.selectedTable,
    tableStatusData: state.tableStatusData
})

export default connect(mapStateToProps)(Menu)