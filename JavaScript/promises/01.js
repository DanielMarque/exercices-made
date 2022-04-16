

// Uma promise recebe uma função de callback pra sucesso(resolved) e outra para falha(reject)

let p = new Promise(function(cumprimirPromessa) {
  cumprimirPromessa('daniel')
})

p.then((valor) =>{
  console.log(valor + ' Salgado')
})


// Usando a nomeclatura normal
let g = new Promise(function(resolve) {
  resolve('sonia')
})

g.then(console.log)
