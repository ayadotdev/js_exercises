function bs(numbers, numberToSearch) {


   if(numbers.length === 1) {
       return numbers[0] === numberToSearch;
   }

    let mid = Math.floor(numbers.length / 2);

    if (numberToSearch === numbers[mid]){
        return true;
    } else if (numberToSearch < numbers[mid]){
        let leftHalf = numbers.slice(0, mid);
        return bs(leftHalf, numberToSearch);
    } else {
        let rightHalf = numbers.slice(mid, numbers.length );
        return bs(rightHalf, numberToSearch);
    }

}

let bigArr = [];

for(let i = 0; i < 1000; i++){
    bigArr.push(i);
}


console.log(bs(bigArr, 65));