

function  arrayDiff(a, b) {
  return a.filter(e => !b.includes(e))
}

const num = [1,2,2,2,3]
const num2 = [2]

arrayDiff(num, num2)