const numPares = [2, 4, 6];
const numImpares = [1, 3, 5];

console.log([...numPares, ...numImpares]);

function returnObject() {
  return {
    name: "Person",
    age: "222",
  };
}

// using spread to concat the rest of the data
const [num1, num2, ...resto] = [1, 2, 3, 4, 5];

console.log(num1, num2, resto);

const pessoa = {
  nome: "Daniel",
  idade: 24,
};

const pessoaComTelefone = {
  ...pessoa,
  telefone: 202020,
};

const provision = returnObject();
const user = { cabea: "Ims" };
const { name, age } = returnObject();

console.log(pessoaComTelefone);
console.log(name, age);

function returnAnotherObject() {
  const data = {
    dados: {
      nomes: {
        nome1: "Daniel",
        nome2: "Sonia",
      },
    },
    dados1: {
      nomes: {
        nome1: "Lais",
        nome2: "Thais",
      },
    },
  };
  return data;
}

const { dados, dados1 } = returnAnotherObject();

console.log(dados, dados1);
