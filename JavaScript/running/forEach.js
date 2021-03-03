const list = ["Daniel", "Sonia", "Flor", "Mila"];

for (let name of list) {
  if (name === "Flor") {
    break;
  }
  console.log(name, list.indexOf(name), list);
}
