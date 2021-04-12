// function isIsogram(str){ 
//     return !/(\w).*\1/i.test(str)
//   }


function isIsogram(str){ 
    let strToLower = str.toLowerCase();
    if(strToLower === ""){
        return true;
    }
    let set = new Set();
    for (let i = 0; i < strToLower.length; i++) {
        if (!set.has(strToLower[i])) {
            set.add(strToLower[i]);
        }
        else{
            return false;
        }
    }
    return true;
  }

  console.log(isIsogram("moOse"));