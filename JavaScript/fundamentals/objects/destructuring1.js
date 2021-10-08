// const maca = { daniel: "pera" }

// maca.uva = 'Preta'

// console.log(maca)

// maca.uva = 'rosa'

// console.log(maca)

const personTwo = {
  name: 'Daniel',
  age: 32,
  favoriteFood: 'waterMelon',
  address: {
    city: 'Rio de Janeiro',
    state: 'São Paulo'
  }
}

const { name: firstName, age: idades, address: { city: cidade, state } } = personTwo

console.log(firstName, cidade)

// reassignObjects

const person = {
  nome: firstName,
  idade: personTwo.age,
  cidadeNascimento: cidade
}

console.log(person)
