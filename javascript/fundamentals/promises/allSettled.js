const request = (name) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(name + " Marques");
    }, 2000);
  });
};

const nomes = ["Daniel", "Pastel", "Tem mel"];
const nomeCompleto = [];

(async () => {
  for (const item of nomes) {
    await request(item);
    // nomeCompleto.push(request(item));
  }
})();

// (async () => {
//   const meu = await Promise.allSettled(nomeCompleto);
//   console.log(meu);
// })();
