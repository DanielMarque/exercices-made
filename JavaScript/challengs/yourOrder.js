
function order(words) {

  let found = words.match(/[1-9]/g)
  let foundInt = found.map(i => parseInt(i)) 

  return foundInt
}

console.log(order("is2 Thi1s T4est 3a"))