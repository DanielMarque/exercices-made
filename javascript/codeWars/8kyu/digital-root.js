function digital_root(n) {
  let letra = n.toString().split('')
  if(letra.length !== 1){
    for(const palavra of letra){
      parseInt(palavra)
    }
  }
  console.log(letra)
}


console.log(digital_root(1))
