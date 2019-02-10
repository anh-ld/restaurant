import React, { Component } from 'react';
import { connect } from 'react-redux';

class TableData extends Component {
  render() {
    const { data } = this.props;
    let tableData = [];
    if (data.length === 0) {
      return (
        <div className="tableData">
          <h3>You have no previous data.</h3>
        </div>
      )
    } else {
      data.reverse();
      for (let i = 0; i < data.length; i++) {
        tableData.push(
          <tr key={i}>
            <th scope="row">{i + 1}</th>
            <td>{data[i].date}/{data[i].month}/{data[i].year}</td>
            <td>{data[i].customer}</td>
            <td>{data[i].money}</td>
          </tr>
        )
      }
    }
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