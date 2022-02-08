function makeNegative(num) {
  if(num < 0) {
    return num
  }
  let convertNum = num.toString()
  convertNum = '-'+ convertNum
  return Number(convertNum)
}

console.log(makeNegative(-1))
