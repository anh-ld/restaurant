const selectTable = (id) => {
  return {
    type: "SELECT_TABLE",
    id
  };
};

export default selectTable;