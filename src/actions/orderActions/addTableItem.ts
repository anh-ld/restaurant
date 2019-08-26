const addTableItem = (name: string, price: number, id: number) => ({
    type: "ADD_TABLE_ITEM",
    tableId: id,
    item: {
        price,
        name
    }
})

export default addTableItem