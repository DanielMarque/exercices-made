
function getDivisors(num) {
  for (var d = 0, i = num; i > 0; i--) {
    if (num % i === 0) {
      d++
    }
  }
  return d
}

console.log(getDivisors(4))