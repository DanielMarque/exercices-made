
module.exports.response = (event, context, callback) => {
  console.log('Queue Called')
  console.log(JSON.parse(event.Records[0].body))
  context.done(null, '')
}
