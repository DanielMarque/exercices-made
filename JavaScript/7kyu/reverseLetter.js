
function reverseLetter(str) {
  return (((str.split('')).reverse()).join('')).replace(/[^a-z]/gi,'')
}

console.log(reverseLetter('daniel'))
