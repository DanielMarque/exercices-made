
// bruh
function oddOrEven(array) {
  let total = array.reduce((total, v) => {
    return total + v
  }, 0)

  if(total % 2 == 0 && total % 2 != 1) {
    console.log('even')
  }else {
    console.log('odd')
  }  
}


oddOrEven([])