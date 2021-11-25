// Exemplo que mostra na prática como cada exemplo da event queue acontece
// em orderm e é organizada, a fn1() é chamada e nela é chamada a fn2(), mas
// somente após 4 segundos a mesma é executada.

function fn3() {
  setTimeout(() => console.log('7 segundos'), 7000)
  console.log('fn3')
}

function fn2() {
  setTimeout(() => fn3(), 4000)
  console.log('fn2')
}

function fn1() {
  setTimeout(() => fn2(), 4000)
  console.log('fn1')
}

function main() {
  fn1()
}

main()
console.log('fim')
