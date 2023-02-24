
const size = 5

console.time('Using Map')

const mapa = new Map()

mapa.set('names', ['Daniel', 'Marques', 'Conceição'])
mapa.set('First Name', 'Laís')
mapa.set('Last Name', 'Alves')

for (let i = 0; i <= size; i++) {
    mapa.set('age', 30)
    mapa.set('Last Name', 'Marques')
}

console.timeEnd('Using Map')

// ================

console.time('Using Object')

const obj = {}

obj.names = ['Daniel', 'Marques', 'Conceição']
obj.FirstName = 'Lais'
obj.LastName = 'Alves'

for (let i = 0; i <= size; i++) {
    obj.age = 30
    obj['LastName'] = 'Marques'
}

console.timeEnd('Using Object')

// =================


