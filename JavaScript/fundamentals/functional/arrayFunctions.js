
const num = [5, 2, 3, 4]

const sum = num.reduce((a, b) => a + b)

const doubleResult = num.map(i => 2 * i)

function double(item) {
  return item * 2
}

console.log(doubleResult)

const newArray = num.fill(-8)

console.log(newArray)

// If i want to create a new array and fill with random numbers

// let vals = new Array(50)

vals = Array(20).fill(0).map(() => Math.random())

console.log(vals)
