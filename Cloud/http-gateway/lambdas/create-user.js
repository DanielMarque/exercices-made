const AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid')

const dynamo = new AWS.DynamoDB();

exports.handler = async event => {

  const params = JSON.parse(event.body)

  try {
    await dynamo.putItem({
      TableName: process.env.DYNAMO_TABLE_USERS,
      Item: {
        id: {
          S: uuidv4()
        },
        name:{
          S: params.name
        } ,
        email: {
          S: params.email
        }
      }
    }).promise()

    return {
      statusCode: 201,
      body: JSON.stringify({
        message: "Dados gravados no banco!",
        dados: params
      })
    };
  } catch (err) {
    console.error(err);
    return {
      status: 500,
      message: 'Tudo errado',
      err
    };
  }
};
