function parse(data){

  let value = 0
  const retunedArray = []

  data.split('').forEach((command) => {
    switch (command) {
      case 'i':
        value++
        break
      case 'd':
        value--
        break
      case 's':
        value = value**2
        break
      case 'o':
        retunedArray.push(value)
        break
      default:
        break
    }
  })

  return retunedArray
}

console.log(parse('iiisxxxdoso'))
