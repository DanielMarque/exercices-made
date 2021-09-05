
// --------- MAP ------------

// Recebe uma função callback como parâmetro e retorna um novo array
// com base no processamento da função de callback

const videos = [
  "step brother, im stuck",
  "how to ruby",
  "css tutorial",
  '2'
]

const numbers = [1, 3, 4, 5]

const newVideos = videos.map((item) => {
  return item.toUpperCase()
})

console.log(newVideos)

// --------- FIND ------------

// Retorna o primeiro elemento de um array
const search = videos.find((video) => {
  return video.includes('to')
})

const searchedNumber = numbers.find((num) => {
  return num > 1 && num < 4
})

console.log(search)

console.log(searchedNumber)

// --------- FILTER ------------

// Passa pelos itens do array trazendo todas os itens que forem verdadeiros

var games = [
  { name: 'Mass Effect', rating: 7.8 },
  { name: 'Dead Space', rating: 8 },
  { name: 'Borderlands', rating: 3 },
  { name: 'Candy Crush', rating: 5 }
]

const filtrado = videos.filter((item) => { return item.length > 8 })
const melhores = games.filter((item) => { return item.rating > 5 })

console.log(filtrado)
console.log(melhores)