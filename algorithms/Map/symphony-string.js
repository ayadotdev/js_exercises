// 'ABBASCSC' -> true 
// 'WWWLLL' -> true 
// 'ABASCSC' -> false 

function checkIfSymphony (str) {
    const strToArr = str.split("");
    let charsAndOcc = new Map ();
    strToArr.forEach(char => {
        if(!charsAndOcc.has(char)){
            charsAndOcc.set(char,1);
        }
        else{
            let currentValue = charsAndOcc.get(char);
            charsAndOcc.set(char,currentValue + 1);
        }
    })
    

/**
 *      A - 2
 *      B - 2
 *      C - 2
 *      S - 2
 */


    let firstOne = null;


    for (let [key,value] of charsAndOcc){

        if(firstOne === null){
            firstOne = value;
        }else if(value !== firstOne){
            return false;
        }
    } 
    return true;
}

console.log(checkIfSymphony ('ABBASCSSC'));
