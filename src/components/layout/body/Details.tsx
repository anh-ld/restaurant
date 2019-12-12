import React from "react"
import ToggleTableButton from "./details/ToggleTableButton"
import OrderList from "./details/OrderList"
import {connect} from "react-redux"
import Bill from "./details/Bill"
import {State} from "Type/store"
import Pane from 'Atom/Pane'
import styled from 'styled-components'

interface Props {
    tableStatus: boolean
}

const StyledPane = styled(p => <Pane {...p} />)`
    display: flex;
    flex-direction: column;
`

const Details: React.FC<Props> = ({tableStatus}) => (
    <StyledPane>
        <ToggleTableButton/>
        {tableStatus ? <OrderList/> : null}
        {tableStatus ? <Bill/> : null}
    </StyledPane>
)

const mapStateToProps = (state: State) => ({
    tableStatus: state.tableStatusData[state.selectedTable]
})

export default connect(mapStateToProps)(Details)
