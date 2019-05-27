// Work through this problem on https://leetcode.com/problems/coin-change-2/ and use the specs given there.
// Feel free to use this file for scratch work.

var change = function (amount, coins, memo = {}) {
    if (amount in memo) return memo[amount];
    if (amount === 0) return 0;

    let numCoins = [];
    coins.forEach((coin) => {
        if (coin < amount) {
            numCoins.push(1 + change(amount - coin, coins, memo));
        }
    });

    memo[amount] = numCoins.length;
    return memo[amount];
};