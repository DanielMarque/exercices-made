
const result = []
const vetMirror = []

const invert = (words) => {
  wordsAsArray = words.split('')
  wordsAsArray.forEach((currentValue, index) => {
    result.unshift(currentValue)
  })
  return result.join('')
}

function vertMirror(palavra) {
  const parts = palavra.split('\n')

  parts.forEach(item => {
    const date = invert(item)
    vetMirror.push(date)
  })
  return vetMirror
}

console.log(vertMirror("hSgdHQ\nHnDMao\nClNNxX\niRvxxH\nbqTVvA\nwvSyRu"))
