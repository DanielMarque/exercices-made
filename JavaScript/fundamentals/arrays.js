const lista = [10, 20, 30, 35]
lista.splice(0, 0, 18, 15, 16)
console.log(lista)

const ordenado = lista.sort((a, b) => { return a - b })
console.log(ordenado)