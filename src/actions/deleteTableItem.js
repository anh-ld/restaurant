const deleteTableItem = (tableId, id) => {
  return {
    type: "DELETE_TABLE_ITEM",
    tableId,
    id
  };
};

export default deleteTableItem;