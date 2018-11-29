import { combineReducers } from "redux";
import {
  ADD_TABLE_ITEM,
  TOGGLE_TABLE,
  DELETE_TABLE_ITEM,
  INCREMENT_MONEY_EARNED,
  SELECT_TABLE
} from "../constants/constants.js";

var initialTableData = [];

for (let i = 0; i < 16; i++) {
  initialTableData.push([]);
}

var initialTableStatusData = new Array(16).fill(false);

const tableData = (state = initialTableData, action) => {
  switch (action.type) {
    case ADD_TABLE_ITEM:
      var stateCopy = [];
      for (let i = 0; i < 16; i++) {
        stateCopy.push(state[i].slice());
      }
      stateCopy[action.tableId].push(action.item);
      return stateCopy;
    case DELETE_TABLE_ITEM:
      var stateCopy = [];
      for (let i = 0; i < 16; i++) {
        stateCopy.push(state[i].slice());
      }
      console.log(action);
      stateCopy[action.tableId].splice(action.id, 1);
      return stateCopy;
    case TOGGLE_TABLE:
      var stateCopy = [];
      for (let i = 0; i < 16; i++) {
        stateCopy.push(state[i].slice());
      }
      stateCopy[action.id] = [];
      return stateCopy;
    default:
      return state;
  }
};

const moneyEarned = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT_MONEY_EARNED:
      return state + action.amount;
    default:
      return state;
  }
};

const selectedTable = (state = null, action) => {
  switch (action.type) {
    case SELECT_TABLE:
      if (state === action.id) return null;
      else return action.id;
    default:
      return state;
  }
};

const tableStatusData = (state = initialTableStatusData, action) => {
  switch (action.type) {
    case TOGGLE_TABLE:
      var stateCopy = state.slice();
      stateCopy[action.id] = !stateCopy[action.id];
      return stateCopy;
    default:
      return state;
  }
};

const reducer = combineReducers({
  moneyEarned,
  selectedTable,
  tableStatusData,
  tableData
});

export default reducer;
