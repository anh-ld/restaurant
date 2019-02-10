import React, { Component } from 'react';
import TableData from './TableData';

class DataHistory extends Component {
  render() {
    if(!this.props.show) {
      return null;
    }

    return (
      <div className="backdrop">
        <div className="modal">
          <div className="header">
            <h2>History</h2>
            <button
              onClick={this.props.toggleModal}
            >
              x
            </button>
          </div>
          <TableData />
        </div>
      </div>
    );
  }
}

export default DataHistory;