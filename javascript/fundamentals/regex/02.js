const texto  = require('./textBase')

const regExp = /Daniel/gi

console.log(texto.match(regExp))

// console.log(texto.replace(/Daniel/gi,'Danilo')) // Replace all Upper and lowerCases "Daniel" to "Danilo"
// console.log(texto.replace(/(Daniel)/gi,'"$1"')) // Add a regex pattern with match something defined

console.log(texto.replace(/(Daniel)/gi, (e) => {
  return e.toUpperCase()
}))

