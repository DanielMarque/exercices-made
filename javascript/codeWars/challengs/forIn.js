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

// for (let x in myObj[0].database01.table01) {
//   console.log(x)    // Return only the Keys
// }

for (let x in myObj[0].database01.table01) {
  console.log(myObj[0].database01.table01[x])    // Return only the Value of the Keys
}
