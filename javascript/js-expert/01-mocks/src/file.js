const {readFile} = require('fs/promises')
const {join} = require('path')


class File {
  static async csvToJson(filePath){
    const content = File.getFileContent(filePath)
    return content
  }

  static async getFileContent(filePath){
    const fileName = join(__dirname, filePath)
    return (await readFile(fileName)).toString("utf-8") // Tem um await aqui
  }
}

(async () => {
  const result = await File.csvToJson('./../mocks/four-invalid-itens.csv')
  // const result = await File.csvToJson('./../mocks/three-valid-itens.csv')
  console.log(result)
})()
