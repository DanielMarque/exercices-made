

function printerErrors(s) {

  const lista = ['n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  let count = 0
  for (var i = 0; i < s.length; i++) {
    for (var j = 0; j < lista.length; j++) {
      if (s[i].equals(lista[j])) {
        count++
      }
    }
  }
}