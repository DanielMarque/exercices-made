exports.handler = async (event, context,) => {

  const response = {
    "statusCode": 209,
    "body": JSON.stringify({
      message: 'Uhuuuu!'
    })
  };

  try {
      console.log(event);
      console.log('CONTEXTO: ', context);
      return response;
  } catch (err) {
      console.error(err);
      return {
        status: 500,
        message: 'Tudo errado',
        err
      };
  }
};
