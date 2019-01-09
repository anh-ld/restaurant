import React, { Component } from 'react';
import { connect } from 'react-redux';

class Bill extends Component {
  render() {
    let total = 0;
    const {items} = this.props;
    for (let i = 0; i < items.length; i++) {
      total += items[i].price * items[i].quantity;
    }
    return (
      <div className="bill">
        Total: {total}<span>$</span>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.tableData[state.selectedTable]
  }
}

export default connect(mapStateToProps, null)(Bill);