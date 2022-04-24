
function removeFirst(string) {
  let ok = string.split('')
  ok.shift()
  ok.pop()

  return ok
}

console.log(removeFirst('daniel'))