import React, { Component } from 'react';
import { connect } from "react-redux";
import selectTable from '../../../../actions/selectTable';

class TableButton extends Component {
  render() {
    return (
      <button 
        className={this.props.tableStatusData[this.props.id] ? "tableButtonSelected" : "tableButton"}
        onClick={() => this.props.onSelect(this.props.id)}
      >
        {this.props.id}
      </button>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tableStatusData: state.tableStatusData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSelect: (id) => {
      dispatch(selectTable(id));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TableButton);