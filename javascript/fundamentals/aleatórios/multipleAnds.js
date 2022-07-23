
const obj = {
  address: {
    postalCode: "2480000"
  }
}

//A Short way to do that: obj?.address?.postalCode

if (obj && obj.address && obj.address.postalCode) {
  return console.log(obj.address.postalCode)
}

console.log("nop")