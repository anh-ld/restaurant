import React from "react"
import {connect} from "react-redux"
import selectTable from "../../../../actions/orderActions/selectTable"
import styled from "styled-components"
import {State} from "../../../../types/store"
import Button from '../../../atom/Button'

const StyledButton = styled(props => <Button {...props} />)`
    width: 75px;
    height: 75px;
    font-size: 32px;
    color: ${p => p.theme['N800']};
`

const StyledTableButton = styled(props => <StyledButton {...props} />)`
    background-color: ${p => p.theme['100']};
    &:hover,
    &:active {
        background-color: ${p => p.theme['400']};
    }
`

const SelectedTableButton = styled(props => <StyledButton {...props} />)`
    background-color: ${p => p.theme['400']};
`

const TableButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

interface Props {
    tableStatusData: Array<boolean>
    id: number
    onSelect: (id: number) => void
}

const TableButton: React.FC<Props> = ({tableStatusData, id, onSelect}) => {
    const RenderTableButton = tableStatusData[id] ? SelectedTableButton : StyledTableButton

    return (
        <TableButtonWrapper>
            <RenderTableButton onClick={() => onSelect(id)}>
                {id}
            </RenderTableButton>
        </TableButtonWrapper>
    )
}

const mapStateToProps = (state: State) => ({tableStatusData: state.tableStatusData})

const mapDispatchToProps = (dispatch: any) => ({
    onSelect: (id: number) => {
        dispatch(selectTable(id))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(TableButton)
