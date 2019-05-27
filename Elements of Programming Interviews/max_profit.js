const arr = [310,315,275,295,260,270,290,230,255,250];

function maxProfit(arr) {
    if (arr.length === 0) {
        return 0;
    }
    let min = arr[0];
    let profit = 0;
    for (let i = 0; i < arr.length; i++) {
        min = Math.min(min, arr[i]);
        profit = Math.max(profit, arr[i] - min);
    }
    return profit;
}

console.log(maxProfit(arr));