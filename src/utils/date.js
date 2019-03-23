// two digit date, month: add 0 to date, month if it's lower than 10
export const transform = (number) => {
  return number < 10 ? '0' + number.toString(): number;
};

export const getDMY = () => {
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  const date = new Date().getDate();
  return {date, month, year}
};