function sum2DArray(lista){

  let result = new Array()
  for(let item of lista){
    for(let index of item){
      let i = 0
      let res = index + result[i]
      result.push(res)
      i++
    }
  }
  return result
}

console.log(sum2DArray([
  [1,1,1,1],
  [1,1,1,1],
  [1,1,1,1],
  [1,1,1,1]
]))
