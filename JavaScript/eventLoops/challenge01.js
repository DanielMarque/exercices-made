
// sommar(3)(4)(5)

// calcular(3)(7)(fn)


function somar(num1) {
  return function (num2) {
    return function (num3) {
      return num1 + num2 + num3
    }
  }
}

console.log(somar(1)(2)(3))

function subtrair(n1, n2) {
  return n1 + n2
}

function calcular(num1) {
  return (num2) => {
    return (fn) => {
      return fn(num1, num2)
    }
  }
}


console.log(calcular(1)(2)(subtrair))
