import React from "react"
import ToggleTableButton from "./details/ToggleTableButton"
import OrderList from "./details/OrderList"
import {connect} from "react-redux"
import Bill from "./details/Bill"
import {State} from "../../../types/store"
import Pane from '../../atom/Pane'

interface Props {
    tableStatus: boolean
}

const Details: React.FC<Props> = ({tableStatus}) => (
    <Pane>
        <ToggleTableButton/>
        {tableStatus ? <OrderList/> : null}
        {tableStatus ? <Bill/> : null}
    </Pane>
)

const mapStateToProps = (state: State) => ({
    tableStatus: state.tableStatusData[state.selectedTable]
})

export default connect(mapStateToProps)(Details)
