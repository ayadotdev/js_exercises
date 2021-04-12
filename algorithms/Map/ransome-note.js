const checkIfARansomeNote = (magazine,note) => {
    let map = new Map ();
    let arrMagazine = magazine.split(" ");
    arrMagazine.forEach(word => {
        if(!map.has(word)){
            map.set(word,1)
        }
        else{
            currentValue = map.get(word);
            map.set(word, currentValue + 1);
        }
    })

    let arrNote = note.split(" ");

for (let i = 0; i < arrNote.length; i++){
    if(!map.has(arrNote[i])){
        return false;
    }else{
        currentValue = map.get(arrNote[i]);
        map.set(arrNote[i], currentValue - 1)
    }
}

    
    return true;
    
}

console.log(checkIfARansomeNote("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat", "dolor sit amet"));