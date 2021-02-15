const http = require("http");
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "Text/plain");
  res.end("Olá Mundo");
});

server.listen(port, () => {
  console.log(`Server ins running in: http://localhost:${port}`);
});
