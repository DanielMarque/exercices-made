
function daniel() {
  console.log('Olá', Date.now())
}

setInterval(() => {
  daniel()
}, 1000);
