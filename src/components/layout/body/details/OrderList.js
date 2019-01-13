import React, { Component } from 'react';
import { connect } from "react-redux";
import deleteTableItem from '../../../../actions/deleteTableItem';
import addTableItem from '../../../../actions/addTableItem';

class OrderList extends Component {
  componentDidUpdate = () => {
    if (this.props.items.length > 0) {
      this.refs.orderTable.scrollIntoView(false);
    }
  }

  render() {
    return (
      <div className="orderList">
        {this.props.items.length === 0 ? "" :
          <table ref='orderTable'>
            <thead>
              <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.props.items.map((item, i) => {
                return (
                  <tr key={i}>
                    <td>{item.name}</td>
                    <td>{item.price} $</td>
                    <td>{item.quantity}</td>
                    <td className="itemActions">
                      <button
                        className="itemNumber"
                        onClick={() => this.props.onDelete(this.props.selectedTable, i)}
                      >
                      -
                      </button>
                      <button
                        className="itemNumber"
                        onClick={() => this.props.onAdd(item.name, item.price, this.props.selectedTable)}
                      >
                        +
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
    },
    onAdd: (name, price, tableId) => {
      dispatch(addTableItem(name, price, tableId));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderList);