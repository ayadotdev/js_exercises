function sortedSquaredArray(array) {
    let result = new Array(array.length).fill(0);
    let smallerIdx = 0;
    let largerIdx = array.length - 1;
    for (let i = array.length - 1; i >= 0; i--) {
        let smallerValue = array[smallerIdx];
        let largerValue = array[largerIdx];
        if (Math.abs(smallerValue) > Math.abs(largerValue)){
            console.log('if')
            result[i] = smallerValue*smallerValue;
            smallerIdx += 1;
        }else{
            console.log('else')
            result[i] = largerValue*largerValue;
            largerIdx -= 1;
        }
    }
    return result;
}
console.log(sortedSquaredArray([1, 2, 3, 4]));
//16 4 9