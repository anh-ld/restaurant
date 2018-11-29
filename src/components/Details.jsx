import React from "react";
import OrderListContainer from "../containers/OrderListContainer.js";
import ToggleTableContainer from "../containers/ToggleTableContainer.js";

const Details = props => {
  var total = 0;
  if (props.selectedTable !== null) {
    for (let i = 0; i < props.items.length; i++) {
      total += props.items[i].price;
    }
  }
  return (
    <div className="details">
      <h2>
        {props.selectedTable === null ?
          "No selected Table" :
          "Table #" + props.selectedTable}
      </h2>
      <ToggleTableContainer />
      <h3>
        {props.tableStatus ? "Bill Total: " + total + "$": ""}
      </h3>
      <OrderListContainer />
    </div>
  );
};

export default Details;