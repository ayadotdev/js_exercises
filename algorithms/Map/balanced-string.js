const isStringBalanced = (str) => {
    let map = new Map();
    for (const char of str) {
        if (!map.has(char)) {
            map.set(char, 1)
        } else {
            let currentOccur = map.get(char);
            map.set(char, currentOccur + 1);
        }

    }
    let withoutDuplicates = new Set();
    for (let amount of map.values()) {
        withoutDuplicates.add(amount);
    }

    if (withoutDuplicates.size === 1) 
    { return true } 
    else if (withoutDuplicates.size === 2){
        let arrFromSet = Array.from(withoutDuplicates);
        if (arrFromSet[1] - arrFromSet[0] === 1 || arrFromSet[0] - arrFromSet[1] === 1){
            return true;
        }
        else {
            return false;
        }
    }
    else return false;


}

console.log(isStringBalanced("aassssssbbccdddd"))