// - g : Global (Found a pattern in all the file source given)
// - i : Insesitive (Find only that was passed)

const texto  = require('./textBase')

const regExp = /vestido  vermelhor/i
console.log(regExp.test(texto))
