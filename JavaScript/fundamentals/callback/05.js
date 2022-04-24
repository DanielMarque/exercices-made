// Using reduce

const carrinho = [
  { nome: 'Caneta', qtd: 10, preco: 7.99 },
  { nome: 'Impressora', qtd: 0, preco: 37.99 },
  { nome: 'Caderno', qtd: 2, preco: 27.9 },
  { nome: 'Tesoura', qtd: 5, preco: 19.3 },
]

function getFinalValue (product) {
  return product.qtd * product.preco
}

const productsValues = carrinho.map((product) => getFinalValue(product))

const totalValue = productsValues.reduce((acc, current) => acc + current)

console.log(totalValue)
