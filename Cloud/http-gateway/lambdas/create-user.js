
exports.handler = async (event, context, callback) => {

    try {
        console.log(event);
        callback(null, {
          statusCode: 200,
          body: {
            message: 'Sucesso'
          }
        })
    } catch (err) {
        console.error(err);
        return {
          status: 500,
          message: 'Tudo errado',
          err
        };
    }
};
