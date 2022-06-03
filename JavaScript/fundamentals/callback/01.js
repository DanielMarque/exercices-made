// Callback: É a passagem de uma função como parâmetro e essa função retorna a execução dessa função

const somarNoTerminal = (num1, num2) => {
  return num1 + num2
}

const subtrairNotTerminal = (num1, num2) => {
  return num1 - num2
}

const exec = (fn, para1, para2) => {
  console.log(fn(para1, para2))
}

// exec(somarNoTerminal, 56, 38)
// exec(subtrairNotTerminal, 182, 27)

const fn = () => console.log('Executando...')

// setInterval(fn, 1000)

setTimeout((exec)=>{
  return exec(somarNoTerminal, 56, 38)
}, 2000)

