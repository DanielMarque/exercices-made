// Putting a table through console

const obj1 = { name: "Daniel", idade: "23", pais: "Brasil", developer: false };
const obj2 = { name: "Sonia", idade: "49", pais: "Brasil", developer: true };
const obj3 = { name: "Manoel", idade: "54", pais: "Brasil", developer: true };

console.table([obj1, obj2, obj3]);

// Destructuring an object

const { name, idade, pais } = obj2;

// Spreead Operation syntax (The same goes to Arrays)
const item = { status: "Old", health: "good", ...obj1 };

console.log(item);

// Loops

const orders = [500, 30, 99, 15, 223];

const sellers = ["Juvia", "Gray", "Natsu", "Juvia"];

const total = 0;
const withTax = [];
const highValue = [];

// Somando todos os itens de um Array
// const total1 = orders.reduce((acc, cur) => acc + cur);

const total1 = sellers.reduce((todosNomes, nome) => {
  if (nome in todosNomes) {
    todosNomes[nome]++;
  } else {
    todosNomes[nome] = 1;
  }
  return todosNomes;
}, {});

console.log(total1);
