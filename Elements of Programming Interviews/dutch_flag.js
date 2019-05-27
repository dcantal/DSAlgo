const arr = [0,1,2,0,2,1,1];

function dutchFlag(arr, index) {
    const pivot = arr[index];
    
    //first pass, find less than
    let smaller = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot ){
            [arr[i], arr[smaller]] = [arr[smaller], arr[i]];
            smaller++;
        }
    }

    //second pass, find greater than
    let greater = arr.length -1;
    for (let i = arr.length - 1; i >= 0; i--){
        if (arr[i] > pivot ) {
            [arr[i], arr[greater]] = [arr[greater], arr[i]];
            greater--;
        }
    }

    return arr;
}

console.log(dutchFlag(arr, 2));