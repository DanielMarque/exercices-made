function sumTwoSmallestNumbers(numbers) {
  const result = numbers.sort((a, b) => a - b)
  return result[0] + result[1]
}

const result = sumTwoSmallestNumbers([5, 8, 12, 19, 22])
result
