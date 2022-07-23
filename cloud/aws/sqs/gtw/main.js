const AWS = require('aws-sdk')
const sqs = new AWS.SQS({
  region: 'eu-west-1'
})

const QUEUE_URL = `https://sqs.us-east-1.amazonaws.com/413425779393/gtwQueue`

module.exports.send = (event, context, callback) => {

  const params = {
    MessageBody: event.body,
    QueueUrl: QUEUE_URL
  }

  sqs.sendMessage(params, (err, data)=> {
    if(err){
      console.log('Fail to sendo message, error: ', err)

      const response = {
        statusCode: 500,
        body: JSON.stringify({
          message: 'ERROR'
        })
      }

      callback(null, response)
    }

    const response = {
      statusCode: 200,
      body: JSON.stringify({
        message: data.MessageId,
        status: 'Mensagem enviada para fila'
      })
    }

    callback(null, response)
  })
}
