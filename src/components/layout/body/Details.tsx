import React from "react"
import ToggleTableButton from "./details/ToggleTableButton"
import OrderList from "./details/OrderList"
import {connect} from "react-redux"
import Bill from "./details/Bill"
import styled from "styled-components"
import {media} from "../../../utils/styling"
import {State} from "../../../types/store"

const StyledDetails = styled.div`
    width: 316px;
    background-color: #FFFFFF;
    padding: 0.5rem;
    border-radius: 0.25rem;
    margin-right: 1rem;
    ${media.tablet`
        width: initial;
        margin-right: 0;
        margin-bottom: 0.5rem;
        height: 350px;
    `}
`

interface Props {
    tableStatus: boolean
}

const Details: React.FC<Props> = ({tableStatus}) => (
    <StyledDetails>
        <ToggleTableButton/>
        {tableStatus ? <OrderList/> : null}
        {tableStatus ? <Bill/> : null}
    </StyledDetails>
)

const mapStateToProps = (state: State) => ({
    tableStatus: state.tableStatusData[state.selectedTable]
})

export default connect(mapStateToProps)(Details)
