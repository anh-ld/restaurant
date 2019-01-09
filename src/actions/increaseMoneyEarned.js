const incrementMoneyEarned = (amount) => {
  return {
    type: "INCREMENT_MONEY_EARNED",
    amount
  };
};

export default incrementMoneyEarned;