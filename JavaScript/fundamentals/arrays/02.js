
const nomes = [
  'Daniel',
  'Carla',
  'Pedro',
  'Marta'
]

console.log(nomes)
console.log(nomes.length)

function imprimir(nome, indice) {
  console.log(indice + ' - ' + nome)
}

nomes.forEach((item, indice) => {
  console.log(item + ' - ' + indice)
  console.log()
})
nomes.forEach((pessoa) => {
  console.log(pessoa)
})