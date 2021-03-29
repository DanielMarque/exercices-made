

function longest(s1, s2) {

  let newArray = []
  let a = s1.split('')
  let b = s2.split('')
  newArray.push(a + b)  
  newArray = newArray[0].split(',')

  const numerosSemRepeticao = [...new Set(newArray)];

  return numerosSemRepeticao.sort().join('')
}

a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"

console.log(longest(a, b))