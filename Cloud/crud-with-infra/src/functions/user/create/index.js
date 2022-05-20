

const createUserLambda = (event, context) => {

  const {
    name,
    email,
    password
  } = event.pathParameters

  console.log('Aqui eu crio o registro')

  console.log('Depois de registrar eu crio')
}

module.exports = {
  handler: createUserLambda
}
