const { error } = require('./src/constants')
const File = require('./src/file')
const { rejects,doesNotReject,  } = require('assert')
;
(async ()=> {
  const filePath = './mocks/empty-invalid-file.csv'
  const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE)
  const result = File.csvToJson(filePath)
  await rejects(result, rejection).catch(err => {
    console.error(err)
  })
})()
