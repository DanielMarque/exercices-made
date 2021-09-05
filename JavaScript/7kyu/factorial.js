
const factorial = (n) => {

  if (n < 0 || n > 12) {
    throw new RangeError('Parameter must be between ' + 0 + ' and ' + 12);
  }

  count = 1;
  while (n != 0) {
    count *= n;
    n--;
  }

  return count
}

console.log(factorial(0))