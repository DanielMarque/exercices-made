
// Opostas: NORTH and SOUTH - WEST and EAST

// No soluctions found

function dirReduc(arr) {
  let newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "NORTH" && arr[i + 1] === "SOUTH") {
      const index = arr.indexOf(arr[i])
      const index1 = arr.indexOf(arr[i + 1])
      arr.splice(index, 1);
      arr.splice(index1, 1);
    }
    if (arr[i] === "SOUTH" && arr[i + 1] === "NORTH") {
      const index = arr.indexOf(arr[i])
      const index1 = arr.indexOf(arr[i + 1])
      arr.splice(index, 1);
      arr.splice(index1, 1);
    }
    if (arr[i] === "WEST" && arr[i + 1] === "EAST") {
      const index = arr.indexOf(arr[i])
      const index1 = arr.indexOf(arr[i + 1])
      arr.splice(index, 1);
      arr.splice(index1, 1);
    }
    if (arr[i] === "EAST" && arr[i + 1] === "WEST") {
      const index = arr.indexOf(arr[i])
      const index1 = arr.indexOf(arr[i + 1])
      arr.splice(index, 1);
      arr.splice(index1, 1);
    }
  }
  return arr
}

console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]))