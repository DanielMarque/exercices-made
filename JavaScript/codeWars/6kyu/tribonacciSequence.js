// Minha  solução

// function tribo(lista, qnt) {

//   if (qnt === 0) return []

//   let list = lista
//   let result = []
//   result.unshift(lista[2])
//   result.unshift(lista[1])
//   result.unshift(lista[0])

//   while (result.length < qnt) {
//     valor = lista.reduce((total, currentElement) => total + currentElement)
//     result.push(valor)
//     lista.shift()
//     lista.push(valor)
//   }

//   return result
// }

// console.log(tribo([1, 1, 1], 1))


// Solução dos caras

function tribonacci(signature, n) {
  for (var i = 0; i < n - 3; i++) { // iterate n times
    signature.push(signature[i] + signature[i + 1] + signature[i + 2]); // add last 3 array items and push to trib
  }
  return signature.slice(0, n); //return trib - length of n
}

console.log(tribonacci([1, 2, 3], 10))
