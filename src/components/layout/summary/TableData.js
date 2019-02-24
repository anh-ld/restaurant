import React, { Component } from 'react';
import { connect } from 'react-redux';

class TableData extends Component {
  render() {
    const { data } = this.props;
    if (data.length === 0) {
      return (
        <div className="tableData">
          <h3>You have no previous data.</h3>
        </div>
      )
    }

    const year = new Date().getFullYear();
    const month = new Date().getMonth() + 1;
    const date = new Date().getDate();
    const reversedData = data.slice().reverse();
    const tableData = reversedData.map((item, i) => {
      return (
        <tr key={i}>
          <th scope="row">{i + 1}</th>
          <td>
            {item.month === month && item.year === year ?
            item.date === date ?
            "Today" :
            item.date === date - 1 ?
            "Yesterday" :
            `${item.month}/${item.date}/${item.year}` :
            `${item.month}/${item.date}/${item.year}`}
          </td>
          <td>{item.customer}</td>
          <td>{item.money}</td>
        </tr>
      )
    });
    return (
      <table className="tableData">
        <thead>
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>Customer</th>
            <th>Money Earned</th>
          </tr>
        </thead>
        <tbody>
          {tableData}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.dataHistory
  }
}

export default connect(mapStateToProps, null)(TableData);