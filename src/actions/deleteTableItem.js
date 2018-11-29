import { DELETE_TABLE_ITEM } from "../constants/constants.js";

const deleteTableItem = (tableId, id) => {
  return {
    type: DELETE_TABLE_ITEM,
    tableId: tableId,
    id: id
  };
};

export default deleteTableItem;
