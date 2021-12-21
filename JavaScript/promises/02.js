

function esperarPor(tempo = 2000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Executando promise...')
      resolve('Promessas ')
    }, tempo)
  })
}

esperarPor(2000).then(texto => console.log(texto))
