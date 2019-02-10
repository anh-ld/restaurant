import { combineReducers } from 'redux';

const year = new Date().getFullYear();
const month = new Date().getMonth() + 1;
const date = new Date().getDate();

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

// money reducer
const moneyEarned = (state = 0, action) => {
  switch(action.type) {
    case "FETCH_DATA":
      const data = action.payload.find(item => {
        return item.date === date && item.month === month && item.year === year;
      })
      if (data) {
        return data.money;
      }
      return state;
    case "INCREMENT_MONEY_EARNED":
      return state + action.amount;
    case "SIGN_OUT":
      return 0;
    default:
      return state;
  }
}

// customer number reducer
const totalCustomer = (state = 0, action) => {
  switch(action.type) {
    case "FETCH_DATA":
      const data = action.payload.find(item => {
        return item.date === date && item.month === month && item.year === year;
      })
      if (data) {
        return data.customer;
      }
      return state;
    case "ADD_CUSTOMER":
      return state + 1;
    case "SIGN_OUT":
      return 0;
    default:
      return state;
  }
}

// user info reducer
const user = (state = null, action) => {
  switch(action.type) {
    case "FETCH_USER":
      return action.payload;
    case "SIGN_OUT":
      return null;
    default:
      return state;
  }
}

// data from the past reducer
const dataHistory = (state = [], action) => {
  switch(action.type) {
    case "FETCH_DATA":
      return action.payload;
    case "INCREMENT_MONEY_EARNED":
      let todayData = state.find(item => {
        return item.date === date && item.month === month && item.year === year;
      });
      if (todayData === undefined) {
        return [...state, {date, month, year, money: action.amount, customer: 1}];
      } else {
        let stateCopy = state.slice();
        let lastItem = stateCopy.pop();
        return [...stateCopy, {date, month, year, money: action.amount + lastItem.money, customer: lastItem.customer+1}];
      }
    case "SIGN_OUT":
      return [];
    default:
      return state;
  }
}

const reducer = combineReducers({
  selectedTable,
  tableStatusData,
  tableData,
  totalCustomer,
  moneyEarned,
  user,
  dataHistory
});

export default reducer;