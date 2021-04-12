function highAndLow(numbers){
    let arr = numbers.split(" ").map(Number).sort(function(a, b){return b - a});
    return arr[0] + " " + arr[arr.length - 1] ;
  }

  console.log(highAndLow("1 2 3 -4 5"));