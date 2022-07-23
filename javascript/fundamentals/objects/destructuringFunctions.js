
function liquidificador({ banana, uva: { verde, preta }, ...resto }) {

  console.log(verde)
  console.log(banana)
  console.log(preta)
  console.log(resto)
}

const fruits = {
  banana: 'Banana',
  pera: 'Pera',
  uva: {
    preta: 5,
    azul: 2,
    verde: 9
  }
}

liquidificador(fruits)
