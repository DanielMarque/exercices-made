(function (a, b, c) {
  console.log(a + b + c);
})(3, 6, 9);

const x = (function (list) {
  return list.filter((i) => i === "Laís" || i === "23" )
})(["daniel", "25","Laís","23"]);

console.log(x)
