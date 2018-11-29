import React from "react";

const TableButton = props => {
  return (
    <div className="tablebutton">
      <button
        onClick={() => props.onSelect(props.id)}
        style={{"backgroundColor": props.tableStatusData[props.id] ? "yellowgreen" : null}}
        >
        {props.id}
      </button>
    </div>
  );
};

export default TableButton;
