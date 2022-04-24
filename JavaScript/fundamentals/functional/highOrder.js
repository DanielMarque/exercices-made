
// Exemplo 1

function sing(catDo) {
  console.log('la la la')
  catDo()
}

function meow() {
  console.log('meow meow meow')
  return 'jooj'
}


sing(meow)

// Exemplo 2

function mult(factor) {
  return x => x * factor
}

let doubler = mult(2)

console.log(doubler(5))
