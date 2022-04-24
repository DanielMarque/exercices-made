// - g : Global (Found a pattern in all the file source given)
// - i : Insesitive (Find only that was passed)
// - () :  Groups (Find specific groups in strings)
// - | : Or Operator

const texto  = require('./textBase')

const regExp = /(namorada | Daniel)/i
// console.log(regExp.test(texto))
const found = regExp.exec(texto)

console.log(found[0])
