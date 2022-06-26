function twoNumberSum(array, targetSum) {
    let set = new Set();
    let result = [];
    for (let i = 0; i < array.length; i++) {
        let num = array[i];
        if (set.has(targetSum - num)){
            result.push(targetSum - num);
            result.push(num);
        }else{
            set.add(num);
        }
    }
    return result;
}
console.log(twoNumberSum([3,3], 6))