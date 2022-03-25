function add(n) {
  return function addAgain(m) {
    return n + m
  }
}

console.log(add(1)(4))
