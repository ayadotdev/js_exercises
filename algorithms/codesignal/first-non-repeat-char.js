function firstNotRepeatingCharacter(s) {
    for(let i = 0; i<s.length; i++){
        let char = s[i];
        if(s.indexOf(char) === i && s.indexOf(char, i + 1) === -1){
            return char;
        }
    }
  return "_"
}

console.log(firstNotRepeatingCharacter("rrtityyyvio"));

//indexOf torna la prima !!!
// char = t
// i = 4
// index of i => 4