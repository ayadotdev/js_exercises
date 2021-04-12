const checkIfAnagram = (str1, str2) => {
    let map1 = new Map();
    let map2 = new Map();
    if(str1.length !== str2.length){
        return false;
    }
    for (let i = 0; i < str1.length; i++) {
        if(!map1.has(str1[i])){
            map1.set(str1[i],1)
        }
        else {
            map1.set(str1[i], map1.get(str1[i]) + 1)
        }
        if(!map2.has(str2[i])){
            map2.set(str2[i],1)
        }
        else {
            map2.set(str2[i], map2.get(str2[i]) + 1)  
        }
    }
    for (const [key, value] of map1.entries()) {
        if(value  !== map2.get(key)){
            return false;
        }
    }
    return true;
}

console.log(checkIfAnagram("marco","orcam"));
console.log(checkIfAnagram("marco","orcamm"));
console.log(checkIfAnagram("marco","orcaa"));
console.log(checkIfAnagram("marco",""));
console.log(checkIfAnagram("",""));
console.log(checkIfAnagram("o","o"));