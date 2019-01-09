import { combineReducers } from 'redux';

// initiate data for table data
let initialTableData = [];
for (let i = 0; i < 16; i++) {
  initialTableData.push([]);
}

// initiate data for table status data
let initialTableStatusData = new Array(16).fill(false);

// table data reducer
const tableData = (state = initialTableData, action) => {
  switch(action.type) {
    case "ADD_TABLE_ITEM":
      let stateCopy = [];
      for (let i = 0; i < 16; i++) {
        stateCopy.push(state[i].slice());
      }
      // stateCopy[action.tableId].push(action.item);
      let checkItemExist = false;
      for (let i = 0; i < stateCopy[action.tableId].length; i++) {
        if (action.item.name === stateCopy[action.tableId][i].name) {
          stateCopy[action.tableId][i].quantity += 1;
          checkItemExist = true;
          break;
        }
      }
      if (!checkItemExist) {
        action.item.quantity = 1;
        stateCopy[action.tableId].push(action.item);
      }
      return stateCopy;
    case "DELETE_TABLE_ITEM":
      let stateCopy1 = [];
      for (let i = 0; i < 16; i++) {
        stateCopy1.push(state[i].slice());
      }
      // stateCopy1[action.tableId].splice(action.id,1);
      if (stateCopy1[action.tableId][action.id].quantity === 1) {
        stateCopy1[action.tableId].splice(action.id,1);
      } else {
        stateCopy1[action.tableId][action.id].quantity -= 1;
      }
      return stateCopy1;
    case "TOGGLE_TABLE":
      let stateCopy2 = [];
      for (let i = 0; i < 16; i++) {
        stateCopy2.push(state[i].slice());
      }
      stateCopy2[action.id] = [];
      return stateCopy2;
    default:
      return state;
  }
}

// table status data reducer
const tableStatusData = (state = initialTableStatusData, action) => {
  switch(action.type) {
    case "TOGGLE_TABLE":
      let stateCopy = state.slice();
      stateCopy[action.id] = !stateCopy[action.id];
      return stateCopy;
    default:
      return state;
  }
}

// selected table reducer
const selectedTable = (state = null, action) => {
  switch(action.type) {
    case "SELECT_TABLE":
      return action.id;
    case "CLEAR_TABLE":
      return null
    default:
      return state;
  }
}

const moneyEarned = (state = 0, action) => {
  switch(action.type) {
    case "INCREMENT_MONEY_EARNED":
      return state + action.amount;
    default:
      return state;
  }
}

const totalCustomer = (state = 0, action) => {
  switch(action.type) {
    case "ADD_CUSTOMER":
      return state + 1;
    default:
      return state;
  }
}

const sign = (state = false, action) => {
  switch(action.type) {
    case "SIGN":
      return !state;
    default:
      return state;
  }
}

const reducer = combineReducers({
  moneyEarned,
  selectedTable,
  tableStatusData,
  tableData,
  totalCustomer,
  sign
});

export default reducer;