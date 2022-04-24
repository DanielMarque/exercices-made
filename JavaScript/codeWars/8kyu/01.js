// Sum Numbers
function sum (numbers) {
  "use strict";
  if(!numbers.length) {
    return 0
  }
  return numbers.reduce((a, b) => a + b)
};

console.log(sum([1,2,3,4]))
