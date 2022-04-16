

function aguardar(tmpo) {
  return new Promise((resolve) => { // Retornamos uma promisse executando a
    setTimeout(()=>{                // função de callback dentro do serTimeout
      console.log('Chamou')
      resolve()
    }, tmpo)
  })
}

aguardar(2000).then(() => console.log('Promisse Executada'))
