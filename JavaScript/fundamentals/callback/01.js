
function exec(fn, a, b) {
  return fn(a, b)
}

const sumInTerminal = (a, b) => console.log(a + b)
const subInTerminal = (a, b) => console.log(a - b)

exec(sumInTerminal, 10, 3)
exec(subInTerminal, 5, 3)


setInterval(() => {
  sumInTerminal(2, 3)
}, 5000)
