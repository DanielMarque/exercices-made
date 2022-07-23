const squareSum = (numbers) => {
  let arr = [];
  numbers.filter((num) => {
    arr.push(num ** 2);
  });

  let sum = arr.reduce((total, item) => {
    return total + item;
  }, 0);
  return sum;
};

const list = [1, 2, 2];
console.log(squareSum(list));
