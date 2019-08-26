const deleteTableItem = (tableId: number, id: number) => ({
	type: "DELETE_TABLE_ITEM",
	tableId,
	id
})

export default deleteTableItem