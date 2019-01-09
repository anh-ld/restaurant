import React, { Component } from 'react';
import { connect } from "react-redux";
import deleteTableItem from '../../../../actions/deleteTableItem';

class OrderList extends Component {
  render() {
    return (
      <div className="orderList">
        {this.props.items.length === 0 ? "" :
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>-1</th>
              </tr>
            </thead>
            <tbody>
              {this.props.items.map((item, i) => {
                return (
                  <tr key={i}>
                    <td>{item.name}</td>
                    <td>{item.price} $</td>
                    <td>{item.quantity}</td>
                    <td>
                      <button
                        className="decreaseItemNumber"
                        onClick={() => this.props.onDelete(this.props.selectedTable, i)}
                      >
                      -
                      </button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedTable: state.selectedTable,
    items: state.tableData[state.selectedTable]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDelete: (tableId, id) => {
      dispatch(deleteTableItem(tableId, id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderList);