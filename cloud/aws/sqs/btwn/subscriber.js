
exports.main = async function(event, context) {
  console.log(event)
  JSON.parse(event).Records.forEach(record => {
    const { body } = record;
    console.log(body);
  });
  return {};
}
