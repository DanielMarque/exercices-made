const executa = (time=2000) => {
  return new Promise((resolve) => {
    console.log('Executando promise')
    setTimeout(()=>resolve(), time)
  })
}

// executa()
// .then(executa)
// .then(executa)
// .then(executa)
// .then(executa)

(async function daniel(){
  await executa()
  console.log('Async/Await 1')

  await executa()
  console.log('Async/Await 2')

  await executa()
  console.log('Async/Await 3')
})()
