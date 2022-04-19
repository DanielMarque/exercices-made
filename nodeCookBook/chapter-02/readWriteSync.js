// Leitura de um arquivo de forma síncrona
const fs = require("fs")
const path = require("path")

const filePath = path.join(process.cwd(), "hello.txt")

const contents = fs.readFileSync(filePath, "utf-8")

console.log('File Contents: ' + contents)

const upperContents = contents.toUpperCase();

fs.writeFileSync(filePath, upperContents)

const updated_content = fs.readFileSync(filePath, "utf-8")

console.log('Content Updated: ' + updated_content)
