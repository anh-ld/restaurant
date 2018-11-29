import { connect } from "react-redux";
import Overview from "../components/Overview.jsx";

const mapStateToProps = state => {
  return {
    moneyEarned: state.moneyEarned,
    tableStatusData: state.tableStatusData
  };
};

const OverviewContainer = connect(mapStateToProps, null)(Overview);

export default OverviewContainer;
