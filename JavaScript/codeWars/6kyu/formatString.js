function list(names) {
  var xs = names.map(p => p.name)
  var x = xs.pop()
  return xs.length ? xs.join(", ") + " & " + x : x || ""
}

list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }])