const somar = (numbers) => {

  let total = 0;
  for (const n of numbers) {
    total += n
  }

  console.log(total)
}

const somar1 = (...numbers) => {

  let total = 0;
  for (const n of numbers) {
    total += n
  }

  console.log(total)
}

somar([1,2,3])

somar1(12,3)

function daniel(nome) {
  return function fn(sobrenome){
    return nome + ' ' + sobrenome
  }
}

console.log(daniel('Daniel')('Marques'))

// This example

Array.prototype.log = () =>{
  console.log('Daniel')
}

const lista = []

lista.log()
