import React from "react"
import {connect} from "react-redux"
import selectTable from "../../../../actions/orderActions/selectTable"
import styled from "styled-components"
import {media} from "../../../../utils/styling"
import Button from '../../../atom/Button'
import {State} from "../../../../types/store"

const StyledButton = styled(props => <Button {...props} />)`
    font-size: 2rem;
    width: 75px;
    height: 75px;
    margin: 0 1rem;
    ${media.tablet`
        margin-bottom: 0.5rem;
    `}
`

const StyledTableButton = styled(props => <StyledButton {...props} />)`
    background-color: ${p => p.theme['100']};
    color: #333333;
    &:hover,
    &:active {
        background-color: ${p => p.theme['400']};
    }
`

const SelectedTableButton = styled(props => <StyledButton {...props} />)`
    background-color: ${p => p.theme['400']};
    color: #333333;
`

interface Props {
    tableStatusData: Array<boolean>
    id: number
    onSelect: (id: number) => void
}

const TableButton: React.FC<Props> = ({tableStatusData, id, onSelect}) => {
    const RenderTableButton = tableStatusData[id] ? SelectedTableButton : StyledTableButton

    return (
        <RenderTableButton onClick={() => onSelect(id)}>
            {id}
        </RenderTableButton>
    )
}

const mapStateToProps = (state: State) => ({tableStatusData: state.tableStatusData})

const mapDispatchToProps = (dispatch: any) => {
    return {
        onSelect: (id: number) => {
            dispatch(selectTable(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TableButton)
