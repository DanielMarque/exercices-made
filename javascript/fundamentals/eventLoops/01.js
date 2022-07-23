

console.log('Time 1')


function bita() {
  setTimeout(() => {
    return 'Hello my Son!'
  }, 2000)
}

function sita() {
  setTimeout(() => {
    return 'Hello my Father!'
  }, 1000)
  
}

console.log('Time 2')

// const s = new Date().getSeconds();

// setTimeout(function() {
//   // imprime "2", o que significa que o callback não é chamado imediatamente após 500 milissegundos.
//   console.log("Ran after " + (new Date().getSeconds() - s) + " seconds");
// }, 500);

// while(true) {
//   if(new Date().getSeconds() - s >= 2) {
//     console.log("Good, looped for 2 seconds");
//     break;
//   }
// }

async function inicio() {
  console.log('inicio')
  
  await console.log( bita())
  
  awaitconsole.log( sita() ) 
}

inicio()

