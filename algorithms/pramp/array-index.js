function indexEqualsValueSearch(arr) {
    let indexs = [];
    for (let i = 0; i<arr.length; i++){
      if(arr[i]=== i){
        indexs.push(i);
      }  
    }
    return indexs.length > 0 ? Math.min(...indexs) : -1;
  }