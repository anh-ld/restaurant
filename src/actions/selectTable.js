import { SELECT_TABLE } from "../constants/constants.js";

const selectTable = id => {
  return {
    type: SELECT_TABLE,
    id: id
  };
};

export default selectTable;
