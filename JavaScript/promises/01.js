let a = new Promise(function(cumprirPromessa) {
  cumprirPromessa(3)
})

// Then === Callback Hell
a.then(function(valor) {
  console.log(valor)
}).then(() => {
  console.log('eu')
})


// Async/Await === Callback heaven
async function daniel() {
  const dado = await a

  console.log(dado)
}

daniel()
