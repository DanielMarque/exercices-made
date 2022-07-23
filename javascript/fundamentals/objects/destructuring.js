const objeto1 = {
  prop1: 'Assinado',
  prop2: 'Stacado',
}

const objeto2 = {
  prop3: 'Marcado',
  prop4: 'Isolado',
  Items: [
     {
      sacola:
      {
        verdura: 'cenoura',
        fruta: 'Uva',
        carne: 'Boi'
      }
    },
    {
      carrinho:
      {
        rodas: true,
        suporte: true,
      }
    }
  ]
}

// Criando variáveis apartir de um objeto
const { prop3: status, prop4: estado, Items: mercado } = objeto2

console.log(status)
console.log(estado)
console.log(mercado)
