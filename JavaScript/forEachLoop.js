const nomes = ["Daniel", "Sonia", "Laís", "Fernanda"];

for (let i of nomes) {
  console.log(i);
}

var str = "How can mirrors be real if our eyes aren't real";
var lista = [];
lista.push(str);

console.log(lista);

lista = lista[0].split(" ");

for (let item of lista) {
  console.log(item.replace(item[0], item[0].toLocaleUpperCase()));
}
