function divCon(arr){
    let sumStr = 0;
    let sumInt = 0;
    let diff = 0;
    for(let i = 0; i < arr.length; i++){
        if(typeof(arr[i]) === "string"){
            sumStr += parseInt(arr[i],10);
        }  
        else{
            sumInt += arr[i];
        }
    }
    diff = sumInt - sumStr;
    console.log(typeof(diff))
    return diff;
}
console.log(divCon([9, 3, '7', '3'])); //2 why result is negative??
