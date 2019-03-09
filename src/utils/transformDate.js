// two digit date, month: add 0 to date, month if it's lower than 10
const transform = (number) => {
  return number < 10 ? '0' + number.toString(): number;
}

export default transform;