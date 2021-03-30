
// Destructuring Sample - Array

const frutas = ['Banana', 'water melon', 'avocado', 'Apricots']

const [primeira, segunda, ...rest] = frutas

console.log(segunda)
console.log(rest)

// Spread Sample - Array

const frutasCerameladas = ['apple', ...frutas, 'melon']

frutasCerameladas.pop()
frutasCerameladas.shift()

console.log(frutasCerameladas)

// Destructuring Sample - Object

const user = {
  name: 'Daniel',
  photos: [1, 2, 3, 45],
  age: 23,
  analytics: {
    subs: 300,
    likes: 12
  }
}

const {name, subs} = user.analytics

console.log(subs)
