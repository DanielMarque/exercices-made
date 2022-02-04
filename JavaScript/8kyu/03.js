

function digitize(n) {

  const res = n.toString().split('').map(element => {
    return element = parseInt(element)
  });

  return res.reverse()
}

console.log(digitize(35231))
