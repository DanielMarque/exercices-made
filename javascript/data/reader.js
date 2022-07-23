const fs = require('fs');

fs.readFile(__dirname + '/companies.csv', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

const reader = new FileReader()

reader.onload()
