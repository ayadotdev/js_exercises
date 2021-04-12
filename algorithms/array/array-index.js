function indexEqualsValueSearch(arr) {
    let indexs = [];
    for (let i = 0; i<arr.length; i++){
      if(arr[i]=== i){
        indexs.push(i);
      }  
    }
    return indexs.length > 0 ? Math.min(...indexs) : -1;
  }

  console.log(indexEqualsValueSearch([1,2,10,3,6,5]));