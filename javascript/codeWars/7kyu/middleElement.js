
const gimme = (lista) => {
  const pos = lista.sort()[1]
  return lista.indexOf(pos)
}
console.log(gimme([2, 3, 1]))


