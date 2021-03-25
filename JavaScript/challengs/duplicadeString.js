
function duplicatedString(word) {
  word = word.split('')
  wordCopy = word.split('')
  word.forEach((w) => {
    if (word.includes(w)) {
      console.log(w)
    }
  })
}

duplicatedString("daniel")