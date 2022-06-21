function migratoryBirds(arr) {
    let birdsJournal = new Map();
    for(let i=0; i<arr.length; i++){
        let birdType = arr[i];
        if(!birdsJournal.has(birdType)){
            birdsJournal.set(birdType, 1)
        }
        else{
            let currentOccur = birdsJournal.get(birdType);
            birdsJournal.set(birdType, currentOccur + 1);
        }
    }
    let theBiggestOccur = 0;
    let birdsId = [];
    for ( const [birdType,currentOccur] of birdsJournal){
        if(currentOccur > theBiggestOccur){
            birdsId = [];
            theBiggestOccur = currentOccur;
            birdsId.push(birdType);
        }
        else if (currentOccur === theBiggestOccur){
            birdsId.push(birdType);
        }
    }
    birdsId.sort(function (a,b) {return (a-b)});
    return birdsId[0];
}

console.log(migratoryBirds([1,4,4 ,4, 5 ,3]));