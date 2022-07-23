
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

console.log(Object.keys(myObj[1].database02).length)