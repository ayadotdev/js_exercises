const reverse = function (arr, startIdx, endIdx) {
    while(startIdx < endIdx){
        let temp = arr[startIdx];
        arr[startIdx] = arr[endIdx];
        arr[endIdx] = temp;
        startIdx++;
        endIdx--;
    }
}

const rotate = function (nums, k) {
    k = k % nums.length;
    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1);  
    
};

let arr = [1, 2, 3, 4, 5, 6, 7];
rotate(arr, 3);

console.log(arr);



