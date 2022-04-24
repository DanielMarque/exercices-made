
const carrinho = [
  { nome: 'Caneta', qtd: 10, preco: 7.99 },
  { nome: 'Impressora', qtd: 0, preco: 37.99 },
  { nome: 'Caderno', qtd: 2, preco: 27.9 },
  { nome: 'Tesoura', qtd: 5, preco: 19.3 },
]

function getProductName (product) {
  return product.nome
}

function getFinalValue (product) {
  return product.qtd * product.preco
}

const productsName = carrinho.map((product) => getProductName(product))

const productsValues = carrinho.map((product) => getFinalValue(product))

console.log(productsName)

console.log(productsValues)
