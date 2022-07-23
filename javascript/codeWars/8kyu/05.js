
function betterThanAverage(classPoints, yourPoints) {
  const total = classPoints.reduce((a, b) =>  a + b)
  const avg = total/classPoints.length

  if(avg > yourPoints) {
    return false
  }

  return true
}

console.log(betterThanAverage([2, 3], 5))
