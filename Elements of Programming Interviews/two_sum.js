const nums = [2,-6,7,11,15,-2];

var twoSum = function (nums, target) {
    let sums = [];
    let numHash = {};
    for (let i = 0; i < nums.length; i++) {
        let targetMinusEl = target - nums[i];
        if (numHash[targetMinusEl.toString()] !== undefined) {
            sums.push([numHash[targetMinusEl.toString()], i]);
        }
        numHash[nums[i].toString()] = i;
    }
    return sums;
};

console.log(twoSum(nums, 9));