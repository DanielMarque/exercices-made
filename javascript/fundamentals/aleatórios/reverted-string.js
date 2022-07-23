
function revert(word) {
  let out = []

  for(let i = word.length; i <= word.length; i--){
    if(i === -1){
      break
    }
    out.push(word[i])
  }

  out.shift()

  return out
}

console.log(revert('daniel'))
