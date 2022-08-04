
var moveZeroes = function (nums) {
    let i = 0;
    let j = 0;

    while (i < nums.length) {

        if (nums[i] === 0) {
            i++;

        } else {
            let temp = nums[j];
            nums[j] = nums[i];
            nums[i] = temp;
            j++;
            i++;
        }

    }
};

let arr = [0, 0, 1, 3, 12];

console.log(arr);
moveZeroes(arr);
console.log(arr);