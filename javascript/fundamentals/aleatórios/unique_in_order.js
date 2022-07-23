function uniqueInOrder(list) {
  var result = [];
  var last;
  console.log(list.length);
  for (var i = 0; i < list.length; i++) {
    if (list[i] !== last) {
      result.push((last = list[i]));
    }
  }
  return result;
}

console.log(uniqueInOrder("AAAABBBCCDAABBB"));
