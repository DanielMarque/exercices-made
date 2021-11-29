
function disemvowel(str) {
  const vowels = "aeiouAEIOU"
  const newStr = []
  const lista = str.split('')
  newStr.push((lista).filter((word, index) => word[index] === vowels[index]))
  return newStr
}

console.log(disemvowel("This website is for losers LOL!"))
