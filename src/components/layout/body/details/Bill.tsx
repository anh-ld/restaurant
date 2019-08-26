import React from "react"
import {connect} from "react-redux"
import styled from "styled-components"
import Heading from '../../../atom/Heading'
import {State, TableDataType} from "../../../../types/store"

const StyledBill = styled(p => <Heading variant='medium' {...p} />)`
    text-align: center;
    padding: 8px 0;
    color: ${p => p.theme['700']}
`
const Unit = styled.span`
    font-size: 16px;
    color: ${p => p.theme['N700']}
`

interface Props {
    items: Array<TableDataType>
}

const Bill: React.FC<Props> = ({items}) => {
    const total: any = items.reduce((total: number, item: TableDataType) => total + item.price * item.quantity, 0)

    return (
        <StyledBill>
            Total: {total}
            <Unit>$</Unit>
        </StyledBill>
    )
}

const mapStateToProps = (state: State) => ({
    items: state.tableData[state.selectedTable]
})

export default connect(mapStateToProps)(Bill)
