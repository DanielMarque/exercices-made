
function insertionSort1(n, arr) {
    let ordered_arr;
    let inicio = arr[0];
    for(let i = 0; i < n; i++){
        console.log(arr[i]);
        if(inicio < arr[i]){
          ordered_arr.push(arr[i]);
          inicio = arr[i];
        }
    };
    console.log(ordered_arr);
}

insertionSort1(5, [2,1,3,6,9,8]);

