
const  { text, files }  = require('./textBase')

// Quantificadores

// * Opcionais - Pode dar match em 0 ou n 
// ? Opcionais - Pode dar match em 0 ou n 
// + Obrigatório - É obrigatório dar match em no mínimo 1 ou n
// \ - Caractere de Escape


const regExp1 = /dani+el/gi

console.log(text.match(regExp1))