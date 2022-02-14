
const number = 23

console.log(number)


// const sleep = (ms) => Promise.resolve(setTimeout(()=>{console.log('millisecods:', ms)},ms))
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))

function chama(){
  console.log('imprimindo')
  sleep(3000)
  console.log('imprimido!')
}

chama()