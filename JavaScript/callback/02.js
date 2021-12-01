const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'texto.txt')

function exibirConteudo(err, conteudo) {
  console.log(conteudo.toString())
}

console.log('tes 1')
fs.readFileSync(caminho, {}, exibirConteudo)
console.log('tes 2')

// fs.readFile(caminho, {}, exibirConteudo)
