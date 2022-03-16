// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region
AWS.config.update({region: 'us-east-1'});

// Create an SQS service object
var sqs = new AWS.SQS({apiVersion: '2012-11-05'});

exports.main = async (event) => {
  let statusCode = 200;
  let message;

  if(!event.body){
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: "No body was found",
      })
    }
  }

  try {
    await sqs
      .sendMessage({
        QueueUrl: "https://sqs.us-east-1.amazonaws.com/413425779393/sqs-queue-get-info.fifo",
        MessageBody: event.body,
        MessageAttributes: {
          AttributeName: {
            StringValue: "Attribute Value",
            DataType: "String",
          },
        },
      })
      .promise();

    message = "Message accepted!";
  } catch (error) {
    console.log(error);
    message = error;
    statusCode = 500;
  }

  return {
    statusCode,
    body: JSON.stringify({
      message,
    }),
  };

}
