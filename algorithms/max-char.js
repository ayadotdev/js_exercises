// cacchio

const maxChar = (str) => {

    let map = new Map ();
    for(let i=0; i<str.length; i++){
        if(!map.has(str[i])){
        map.set(str[i], 1)
        }
        else {
            map.set(str[i], map.get(str[i]) + 1)
        }
    }

let maxOccurence = 0;
let mostRepeatedChar = '';
for (const [key, value] of map.entries()) {
    if(value > maxOccurence){
        maxOccurence = value;
        mostRepeatedChar = key;
    }
}
return mostRepeatedChar;

}

console.log(maxChar("m"));