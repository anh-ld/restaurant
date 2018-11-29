import React from "react";

const Overview = props => {
  var numTables = 0;
  for (let i = 0; i < props.tableStatusData.length; i++) {
    numTables += props.tableStatusData[i];
  }
  return (
    <div className="overview">
      <h1>Hanoi Pizza Restaurant</h1>
        <p>
          Occupied Tables: {numTables}/16 |
          Earned Money: {props.moneyEarned}$
        </p>
    </div>
  );
};

export default Overview;
