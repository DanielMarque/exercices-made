

function esperarPor(tempo) {
  const futuro = Date.now() + tempo
  while(Date.now() < futuro) {}
}

setTimeout(() => console.log('Exec #01'), 2000) // Segundo Timeout a ser executado

setTimeout(() => { // Primeiro timeout a ser executado, que poem o esperarPor() na fila
  esperarPor(3000)
  console.log('Exec 3')
}, 300)

setTimeout(() => console.log('Exec #02'), 500)

esperarPor(5000)
