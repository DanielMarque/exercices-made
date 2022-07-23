

function oddNumber(lista) {  
  return console.log(lista.filter(i => i % 2 !== 0 && i !== 1 && i !== -1)[0])
}

const array = [1, 2, -1, 4, 8, 5]
oddNumber(array)