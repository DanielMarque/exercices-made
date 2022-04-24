
function solution(arr) {
  if (arr === null) {
    return []
  }
  arr.sort((a, b) => {
    return a - b
  })
  return arr
}

console.log(solution([1, 6, 9, 4, 0]))