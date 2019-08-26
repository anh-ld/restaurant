import React from "react"
import {connect} from "react-redux"
import styled from "styled-components"

const StyledBill = styled.div`
    color: ${p => p.theme['600']};
    width: 100%;
    text-align: center;
    padding: 0.5rem 0;
    font-size: 1.5rem;
`
const Unit = styled.span`
    font-size: 1rem
`

const Bill: React.FC<any> = ({items}) => {
    const total: any = items.reduce((total: any, item: any) => total + item.price * item.quantity, 0)

    return (
        <StyledBill>
            Total: {total}
            <Unit>$</Unit>
        </StyledBill>
    )
}

const mapStateToProps = (state: any) => {
    return {
        items: state.tableData[state.selectedTable]
    }
}

export default connect(mapStateToProps)(Bill)
