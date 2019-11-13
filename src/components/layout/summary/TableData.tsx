import React from "react"
import {connect} from "react-redux"
import styled from "styled-components"
import {transform, getDMY} from "Util/date"
import {CustomerData, State} from "Type/store"

const Table = styled.table`
  margin-top: 1rem;
  width: 100%;
  border-collapse: collapse;
`

const Cell = styled.td`
  text-align: center;
`

const Head = styled.th`
  border-bottom: 1px solid #edeff0;
`

interface Props {
    data: Array<CustomerData>
}

const TableData: React.FC<Props> = ({data}) => {
    if (data.length === 0) {
        return <h3>You have no previous data.</h3>
    }

    const {date, month, year} = getDMY()
    const reversedData: Array<CustomerData> = data.slice().reverse()

    const tableData: React.ReactNode = reversedData.map((item: CustomerData, i: number) => (
        <tr key={i}>
            <th scope="row">{i + 1}</th>
            <Cell>
                {item.month === month && item.year === year
                    ? item.date === date
                        ? "Today"
                        : item.date === date - 1
                            ? "Yesterday"
                            : `${transform(item.date)}/${transform(item.month)}/${item.year}`
                    : `${transform(item.date)}/${transform(item.month)}/${item.year}`}
            </Cell>
            <Cell>{item.customer}</Cell>
            <Cell>{item.money}</Cell>
        </tr>
    ))

    return (
        <Table>
            <thead>
            <tr>
                <Head>#</Head>
                <Head>Date</Head>
                <Head>Customer</Head>
                <Head>Money Earned</Head>
            </tr>
            </thead>
            <tbody>{tableData}</tbody>
        </Table>
    )
}

const mapStateToProps = (state: State) => ({data: state.dataHistory})

export default connect(mapStateToProps)(TableData)
