

const carrinho = [
  { nome: 'Caneta', qtd: 10, preco: 7.99 , fragil: true},
  { nome: 'Impressora', qtd: 0, preco: 37.99 , fragil: false},
  { nome: 'Caderno', qtd: 2, preco: 27.9 , fragil: true},
  { nome: 'Tesoura', qtd: 5, preco: 19.3 , fragil: false},
]

// 1 - fragil: true
// 2 - qtd: 4, preco: 27.10
// 3 - media totais

const fragilItens = carrinho.filter((item) => item.fragil === true)

console.log(fragilItens)

const values = fragilItens.map((item) => {
  return item.qtd * item.preco
})

console.log(values)

const result = values.reduce((acc, current) =>  acc + current) / values.length

console.log(result)
