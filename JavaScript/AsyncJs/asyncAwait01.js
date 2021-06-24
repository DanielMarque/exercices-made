// callback > promise > async/await

// Whats is a callback function?

const fs = require("fs");

console.log(1);

// function callback(err, contents) {
//   console.log(err, String(contents));
// }

// Callback ======================================

// fs.readFile("./in1.txt", (err, content) => {
//   fs.readFile("./in2.txt", (err, content1) => {
//     console.log(3);
//     console.log(err, String(content));
//     console.log(4);
//     console.log(err, String(content1));
//   });
// });

// =======================  ============================

const readFile = (file) =>
  new Promise((resolve, reject) => {
    fs.readFile(file, (err, contents) => {
      if (err) {
        reject(err);
      } else {
        resolve(contents);
      }
    });
  });

// console.log(2);

// readFile("./in1.txt")
//   .then((contents) => {
//     console.log(String(contents));
//   })
//   .catch((err) => {
//     console.log(err);
//   });

console.log(3);

// ================ Async/Await =================

const promessa = new Promise((resolve, reject) => {});

// Conseguimos utilizar "AWAIT" em qualquer função que retorne uma promise
const init = async () => {
  try {
    const result = await readFile("./in1.txt");
    console.log(String(result));
  } catch (error) {
    console.log("Deu Erro mano", error);
  }
};

// Callbacks: São funções que fazem uma ação e no fim retornam algo
// Promises: São funções que tem como retorno algo quando bem sucedida e quando mal sucedida
// Async/Await: São promises com uma syntax mais "tratável". Nos permite escrever código baseados em promises como se fosse síncrono

console.log("init", init());
// console.log(promessa);
