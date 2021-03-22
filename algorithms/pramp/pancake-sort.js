function pancakeSort(arr) {
    // your code goes here
    
    // input -> [3,2,1,4,5, 5, 3, 8, 2]
    // [8,3,5,5,4,1,2,3,2]
    // [2,3,2,1,4,5,5,3,8]
    // [2,3,2,1,4,3,5,5,8]
   for(let i=0; i<arr.length; i++){
     const currentMax = getMax(arr, 0, arr.length-i);
     
     flip(arr, currentMax+1);
     flip(arr, arr.length-i);
     
   }
    
    return arr;
    
  }
  
  
  
  function getMax(arr, start, end){
    let maxIndex = start;
    for (let i = start; i <  end; i++ ){
      if(arr[i] > arr[maxIndex]){
        maxIndex = i;
      }
    }
    return maxIndex;
  }
  
  
  // input for flip (arr, k) -> [1,2,3,4,5] , 3
  // output for flip  =      => [3,2,1,4,5]
  
  // input for flip (arr, k) -> [10,5,7,4,5] , 3
  // output for flip  =      => [7,5,10,4,5]
  
  // [10,5,7,4,5] , reverse first 3 elements
  // [7,5,10,4,5] 
  
  // [10,5,7,4,5] , reverse first 4 elements
  // [4, 5,7, 10, 5]
  // [4, 5,7, 10, 5]
  // [4, 7, 5, 10, 5]
  
  function flip(arr,k) {
    
  //  for (let i = 0; i< Math.floor(k/2)  ; i++){
    for (let i = 0; i< Math.floor(k/2)  ; i++){
      swap(arr, i, k-i-1);
    }
  }
  
  // input [1,2,3] 0 2
  // ouput [3,2,1] 
  
  function swap(arr, i, j){
    let temp = arr[i];
    arr[i] = arr [j];
    arr[j] = temp; 
  }
  
  let arr1 = [10,5,7,4,5];
  
  flip(arr1,3) //-> [7,5,10,4,5]
  console.log(arr1);
  let arr2 = [10,5,7,4,5];
  flip(arr2,4) //-> [4,7,5,10,5]
  console.log(arr2);