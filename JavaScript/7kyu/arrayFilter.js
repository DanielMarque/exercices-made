
function getEvenNumbers(numbersArray) {
  const returnedEvens = numbersArray.filter((item) => item % 2 === 0)
  return returnedEvens
}

console.log(getEvenNumbers([2,4,5,6]))
