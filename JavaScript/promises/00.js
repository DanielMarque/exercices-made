
let a = 1
console.log(a)
function sum(a){
  return a + 1
}

// Cria uma promessa, de receber uma função via pametro e invoca ela com o valor 3
let p = new Promise((cumprirPromessa) => {
  throw new Error('DEU ERROR')
})

p.then((value) => { // Mostra o valor que foi definido na promisse
  console.log(sum(value))
}).catch((error)=>{
  console.log(error)
})
