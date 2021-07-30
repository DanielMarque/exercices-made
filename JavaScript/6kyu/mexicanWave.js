// FAIL
function wave(word) {
  var neWave = []
  let separeted = word.split('')

  for (let i = 0; i < separeted.length; i++) {
    neWave.push(word)
  }

  for (let i = 0; i < neWave.length; i++) {
    neWave[i][i].replace(neWave[i][i].toUpperCase())
  }

  return neWave
}

console.log(wave('hello'))