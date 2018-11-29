import React from "react";

const OrderList = props => {
  var style = {
    textAlign: "left",
    marginLeft: 20
  };

  if (props.selectedTable === null) return null;
  console.log(props);
  return (
    <div style={style}>
      {props.items.map((items, i) => {
        return (
          <div className='orderlist'>
            <table border="1">
              <tbody>
                <tr>
                  <td>{items.name}</td>
                  <td>{items.price}</td>
                  <td>
                    <button onClick={() => props.onDelete(props.selectedTable, i)}>
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  );
};

export default OrderList;
