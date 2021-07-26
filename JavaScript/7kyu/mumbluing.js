
function accum(word) {
  let size = word.length
  let lista = []
  for (var i = 0; i < size; i++) {

    for (var j = -1; j < i; j++) {
      lista.push(word[i])
      let last = word[i]
    }
    lista.push('-')
  }
  lista.pop()
  let newLista = lista.join('')

  newLista = newLista.split('-')
  for (var i = 0; i < newLista.length; i++) {
    //newLista[i][0] = newLista[i][0].toUpperCase()
    if (newLista[i][0] = newLista[i].toUpperCase()) {
      newLista[i][0] = newLista[i].toUpperCase()
    }
  }
  console.log(newLista)
  return lista.join('')
}

console.log(accum('abcd'))