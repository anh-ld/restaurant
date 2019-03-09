const addTableItem = (name, price, id) => {
  return {
    type: "ADD_TABLE_ITEM",
    tableId: id,
    item: {
      price,
      name
    }
  }
}

export default addTableItem;