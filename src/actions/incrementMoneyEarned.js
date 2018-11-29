import { INCREMENT_MONEY_EARNED } from "../constants/constants.js";

const incrementMoneyEarned = amount => {
  return {
    type: INCREMENT_MONEY_EARNED,
    amount: amount
  };
};

export default incrementMoneyEarned;
