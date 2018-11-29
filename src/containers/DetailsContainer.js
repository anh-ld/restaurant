import { connect } from "react-redux";
import Details from "../components/Details.jsx";

const mapStateToProps = state => {
  return {
    selectedTable: state.selectedTable,
    items: state.tableData[state.selectedTable],
    tableStatus: state.tableStatusData[state.selectedTable]
  };
};

const DetailsContainer = connect(mapStateToProps, null)(Details);

export default DetailsContainer;
