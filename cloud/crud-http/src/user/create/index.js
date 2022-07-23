

const createUserLambda = (event, context) => {

  const body = JSON.parse(event.body)

  console.log('Aqui eu crio o registro')

  console.log('Depois de registrar eu crio')

  return {
    statusCode: 201,
    body: JSON.stringify({
      message: "Dados gravados no banco!",
      dados: {
        body: body.name,
        email: body.email,
        passowrd: body.password
      }
    })
  };
}

module.exports = {
  handler: createUserLambda
}
