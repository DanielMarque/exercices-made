const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();
const ssm = new AWS.SSM();
const http = require('http');

// const normalizeEvent = require('/opt/nodejs/normalizer');
// const response = require('/opt/nodejs/response');

exports.handler = async event => {
    if (process.env.DEBUG) {
        console.log({
            message: 'Received event',
            data: JSON.stringify(event),
        });
    }

    try {

        console.log(event);

        return {
          status: 204,
          message: 'Tudo certo'
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
