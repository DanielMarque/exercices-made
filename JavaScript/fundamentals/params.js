
function defaultParams(a = 1, b = 2, c = 3){
    console.log(`\n Param: ${a}\n Param: ${b}\n Param: ${c}`)
}

defaultParams(23, undefined, 87)


function logNumns(...nums){
    total = 0
    // let nome = (nums.filter((i) => i === "GG"))
    // console.log(String(nome))
     for (n of nums){
         total += n
        // console.log(n)
     }
     console.log(total)
}

logNumns(10, 2, 96,484)