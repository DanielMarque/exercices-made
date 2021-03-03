function descendingOrder(n) {
  var n = n.toString().split("");
  var ray = [];

  for (let i of n) {
    ray.push(parseInt(i));
  }

  ray = ray.reverse();
  return parseInt(ray.join(""));
}

descendingOrder(123456789);
