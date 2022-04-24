

const carrinho = [
  { nome: 'Caneta', qtd: 10, preco: 7.99 , fragil: true},
  { nome: 'Impressora', qtd: 1, preco: 649.50, fragil: true},
  { nome: 'Caderno', qtd: 4, preco: 27.10 , fragil: false},
  { nome: 'Tesoura', qtd: 1, preco: 19.20 , fragil: true},
  { nome: 'Lapis', qtde: 3, preco: 5.82, fragil: false }
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
