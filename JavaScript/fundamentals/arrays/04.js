
const numbers = [1, 2, 3, 4, 5, 6, 7]

function filter_evens(n) {
  return n % 2 === 0
}

function filter_odds(n) {
  return n % 2 !== 0
}

console.log(filter_evens(3))
console.log(filter_odds(3))

// Filtra um array utilizando uma função que recebe um parâmetro de filtragem xD
console.log(numbers.filter(filter_evens))
console.log(numbers.filter(filter_odds))