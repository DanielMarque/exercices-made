function countSmileys(arr) {
  let total = 0
  for(const face in arr){
    if(arr[face] === ':)'
    || arr[face] === ';)'
    || arr[face] === ':D'
    || arr[face] === ';-D'
    || arr[face] === ':~)'
    || arr[face] === ':-D'
    || arr[face] === ':-)'
    || arr[face] === ':~D'
    || arr[face] === ';~)'
    || arr[face] === ';~D'
    || arr[face] === ';D'
    || arr[face] === ';-)') {
      total++
    }
  }

  return total
}

console.log(countSmileys([':D',':~)',';~D',':)']))
