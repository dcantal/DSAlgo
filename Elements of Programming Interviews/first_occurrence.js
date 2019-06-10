const arr = [-14,-10,2,108,109,243,285,285,285,401];

function firstOccurrence(arr, target) {
    let left = 0;
    let right = arr.length-1;
    let result = -1;
    while (left <= right) {
        let mid = Math.floor((left+right)/2);
        if (target < arr[mid]) {
            right = mid - 1;
        }
        else if (target === arr[mid]) {
            result = mid;
            right = mid -1;
        }
        else {
            left = mid + 1;
        }
    }
    return result;
}

console.log(firstOccurrence(arr, 108));