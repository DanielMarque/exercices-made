
const myObj = [
  {
    database01: {
      table01:{
        name:'Daniel',
        age:12
      },
      table02: {
        name: 'Sonia',
        age:43
      },
      table03:{
        name:'Laís',
        age:24
      }
    }
  },
  {
    database02: {
      table01:{
        name:'Gabrniel',
        age:83
      },
      table02: {
        name: 'Flor',
        age:4
      },
      table03:{
        name:'Mila',
        age:23
      }
    }
  }
]

//console.log(Object.keys(myObj[1].database02).length)
for (let i of myObj) {
  console.log(i)
}


// for (let i = 0; i <= 100; i++){

//   if (i % 2 == 0){
//     console.log(i)
//   }  
// }

// for (let i = 0; i <= 50; i++){

//   if (i === 20){
//     console.log(i)
//     //continue
//     break
//     console.log('Iterando 20')
//   }  

//   console.log('Iterando')
// }

const nome = 'daniel'
var texto = []

for (let i = 0; i < nome.length; i++) {
  texto.push(nome[i]) 
}

console.log(texto)