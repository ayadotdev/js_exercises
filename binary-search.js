function binarySearch(array, target) {

    if (array.length === 1) {
        if (array[0] === target) {
            return 0;
        }
    }

    let start = 0;
    let end = array.length - 1;

    while(start < end) {
        let mid = (end - start) / 2;
        if (target === array[mid]){
            return mid;
        }else if(target < array[mid]){
            end = mid;
        }else{
            start = mid + 1;
        }
    }

}
