function gerarNumerosEntre(min, max){

  if(min > max) {
    [max, min]= [min, max]
  }

  return new Promise((resolve, reject) =>{
    // Consulta no Banco de dados
    const aleatorio = parseInt(Math.random() * (max - min + 1) + min)
    resolve(aleatorio)
  })
}

gerarNumerosEntre(undefined).then(console.log).catch((error) => console.log(error))


// Caso de erro

function gerarNumerosAleat(min, max){

  if(min > max) {
    [max, min]= [min, max]
  }

  return new Promise((resolve, reject) =>{
    // Consulta no Banco de dados
    const aleatorio = new Error
    // resolve(aleatorio)
    reject(aleatorio)
  })
}

gerarNumerosAleat(undefined).then(console.log).catch((error) => console.log('Falha: ' + error))
