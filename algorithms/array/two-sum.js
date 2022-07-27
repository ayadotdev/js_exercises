/**Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 */

let twoSum = function (nums, target) {
    let result = [];
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(target - nums[i])) {
            let index1 = map.get(target - nums[i]);
            result.push(index1, i)
        } else {
            map.set(nums[i], i)
        }

    }
    return result;
}

console.log(twoSum([1, 3, 6, 8], 9));