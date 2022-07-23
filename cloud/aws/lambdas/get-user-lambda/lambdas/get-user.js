const Responses = require('./responses')

const data = {
  1234: {
    name: 'Daniel Marques',
    age: 24,
    job: 'estag'
  },
  3669: {
    name: 'Daniel Lais',
    age: 25,
    job: 'teacher'
  }
}

exports.main = async event => {
  console.log('event', event)

  if(!event.pathParameters || !event.pathParameters.ID){
    return Responses._400({
      message: 'missing the ID from the path'
    })
  }

  let ID = event.pathParameters.ID

  if(data[ID]){
    return Responses._200(data[ID])
  }

  return Responses._400({
    message: 'noId in data'
  })
}
