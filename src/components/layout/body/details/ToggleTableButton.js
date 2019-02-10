import React, { Component } from 'react';
import { connect } from "react-redux";
import toggleTable from '../../../../actions/toggleTable';
import incrementMoneyEarned from '../../../../actions/increaseMoneyEarned';
import clearSelectedTable from '../../../../actions/clearSelectedTable';
import addCustomer from '../../../../actions/addCustomer';
import { db } from '../../../../config/firebase';

class ToggleTableButton extends Component {
  handleClick = () => {
    let { selectedTable, tableData, uid, dataHistory } = this.props; 
    if (this.props.tableStatus) {
      this.props.onCheckOut(selectedTable, tableData, uid, dataHistory);
    }
    this.props.onToggle(this.props.selectedTable);
  }

  render() {
    return (
      <button 
        id={this.props.tableStatus ?"checkOutButton" : "checkInButton"}
        disabled={this.props.selectedTable === null}
        onClick={this.handleClick}
      >
        {this.props.tableStatus ? 
        "Checkout #" + this.props.selectedTable :
        this.props.selectedTable === null ?
        "Checkin" :
        "Checkin #" + this.props.selectedTable}
      </button>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedTable: state.selectedTable,
    tableStatus: state.tableStatusData[state.selectedTable],
    tableData: state.tableData,
    uid: state.user.uid,
    dataHistory: state.dataHistory
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onToggle: (id) => {
      dispatch(toggleTable(id));
    },
    onCheckOut: (id, tableData, uid, dataHistory) => {
      const year = new Date().getFullYear();
      const month = new Date().getMonth() + 1;
      const date = new Date().getDate();
      let total = 0;

      for (let i = 0; i < tableData[id].length; i++) {
        total += tableData[id][i].price * tableData[id][i].quantity;
      }

      let todayData = dataHistory.find(item => {
        return item.date === date && item.month === month && item.year === year;
      });

      if (todayData === undefined) {
        db.collection('db').doc(uid).set({
          data: [...dataHistory, {date, month, year, money: total, customer: 1}]
        });
      } else {
        let dataHistoryCopy = dataHistory.slice();
        let lastItem = dataHistoryCopy.pop();
        dataHistoryCopy.push({date, month, year, money: total + lastItem.money, customer: lastItem.customer+1});
        db.collection('db').doc(uid).set({
          // data: [...dataHistoryCopy, {date, month, year, money: total + lastItem.money, customer: lastItem.customer+1}]
          data: dataHistoryCopy
        });
      }
      
      dispatch(clearSelectedTable());
      dispatch(incrementMoneyEarned(total));
      dispatch(addCustomer());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToggleTableButton);