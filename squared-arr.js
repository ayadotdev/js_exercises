/**
Given an integer array nums sorted in non - decreasing order, return an array of the squares of each number sorted in non - decreasing order.
/**
 */
const sortedSquares = function (nums) {
    let sortedSquares = new Array(nums.length).fill(0);
    let smallerIndex = 0;
    let largerIndex = nums.length - 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        let smallerValue = nums[smallerIndex];
        let largerValue = nums[largerIndex];
        if (Math.abs(smallerValue) > Math.abs(largerValue)) {
            sortedSquares[i] = smallerValue * smallerValue;
            smallerIndex += 1;
        } else {
            sortedSquares[i] = largerValue * largerValue;
            largerIndex -= 1;
        }
    }
    return sortedSquares;
};

console.log(sortedSquares([-7, -3, 2, 3, 11])); //[0,1,9,16,100]