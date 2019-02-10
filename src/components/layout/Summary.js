import React, { Component } from 'react';
import { connect } from 'react-redux';
import DataHistory from './summary/DataHistory';

class Summary extends Component {
  state = {
    showDataHistory: false
  }

  toggleModal = () => {
    this.setState({showDataHistory: !this.state.showDataHistory});
  }

  render() {
    let {tableStatusData} = this.props;
    let occupiedTable = 0; 
    for (let i = 0; i < tableStatusData.length; i++) {
      if (tableStatusData[i] === true) {
        occupiedTable += 1;
      }
    }
    return (
      <div className="summary">
        <div className="summaryData">
          <div>
            <p>Occupied Table</p>
            <span>{occupiedTable}</span>
            <span className="small-text">/15</span>
          </div>
          <div>
            <p>Total Money</p>
            <span>{this.props.moneyEarned}</span>
            <span className="small-text">$</span>
          </div>
          <div>
            <p>Total Customer</p>
            <span>{this.props.customer}</span>
          </div>
        </div>
        <div>
          <h2>{this.props.user.displayName}</h2>
          <button
            className="historyButton"
            onClick={this.toggleModal}
          >
            History
          </button>
        </div>
        <DataHistory show={this.state.showDataHistory} toggleModal={this.toggleModal} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tableStatusData: state.tableStatusData,
    moneyEarned: state.moneyEarned,
    customer: state.totalCustomer,
    user: state.user
  }
}

export default connect(mapStateToProps, null)(Summary);