
function countPositivesSumNegatives(input) {  
  let list = []
  list.push(input.length)
  list.push(input.forEach(item => {
    let tot;
    if (item < 0) {
      tot += item      
    }
    return item

  }))
  return list
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]

console.log(countPositivesSumNegatives(array))