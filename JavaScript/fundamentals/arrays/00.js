const obj = {
  nome: "Daniel",
  sobrenome: "Marques",
  historico: {
    sites: {
      1: "google",
      2: "youtube",
      3: "github",
      4: "baixaki"
    }
  }
}

// console.log(obj)

const {
  nome: novoNome,
  nome,
  historico: { sites }
} = obj

console.log(typeof (nome))
console.log("Novo nome: ", novoNome)
console.log("Histórico: ", sites)
