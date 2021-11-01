// My mistake

// function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {

//   if (enteredCode !== correctCode) {
//     return "Wrong code"
//   }

//   const currentDatePos = currentDate.split(',')
//   const expirationDatePos = expirationDate.split(',')

//   if (currentDatePos === expirationDatePos) {
//     return true
//   }
//   return false
// }

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  return enteredCode === correctCode && Date.parse(expirationDate) >= Date.parse(currentDate)
}


console.log(checkCoupon('123', '123', 'September 5, 2014', 'October 1, 2014'))
