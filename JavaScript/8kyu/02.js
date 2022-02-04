
function DNAtoRNA(dna) {
  return (dna.split('').map((item) => item === 'T' ? item = 'U' : item)).join('')
}

console.log(DNAtoRNA('GCAT'))

const daniel = 'lais'

console.log(daniel[1].map((item) => console.log(item)))
