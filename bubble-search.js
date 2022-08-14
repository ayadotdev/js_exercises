function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for(let j = 0; j < array.length; j++) {
            if(array[j] > array[j+1]){
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
    return array;
}

let numbersToSort = [9, 3, 2, 11];
let sortedList = bubbleSort(numbersToSort);
console.log(sortedList);

