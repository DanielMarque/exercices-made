
const objeto1 = {
  prop1: 'Assinado',
  prop2: 'Stacado',
}

const objeto2 = {
  prop3: 'Marcado',
  prop4: 'Isolado',
}

const objeto3 = {
  prop5: 'Dano',
  prop6: 'Lai',
}

const objeto4 = {
  prop7: 'Dano',
  prop8: 'Lai',
}

// objeto1.objeto2 = { ...objeto2 }

Object.assign(objeto2, objeto1, objeto3, objeto4)

console.log(objeto2)
