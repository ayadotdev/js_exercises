function almostIncreasingSequence(sequence) {
    let skippedOne = false;
    let previousNumber = sequence[0]
    for (let i = 1; i < sequence.length; i++) {
        if (previousNumber >= sequence[i]) {
            if (!skippedOne) {
                skippedOne = true;
                continue;
                
            } else {
                return false;
            }
        }else{
            previousNumber =  sequence[i];
        }

    }
    return true;
}

function almostIncreasingSequence2(sequence) {
    let found = false;
    for (let i=0; i<sequence.length; i++) {
      if(sequence[i] <= sequence[i-1]) {
          
        if(found) {
          return false;
        }
        found = true;
        
        if(i === 1 || i + 1 === sequence.length) {
          continue;
        }
        else if (sequence[i] > sequence[i-2]) {
          sequence[i-1] = sequence[i-2];
        }
        else if(sequence[i-1] >= sequence[i+1]) {
          return false;
        }
      }
    }
    return true;
  }

console.log(almostIncreasingSequence([1,2,1,2]));//false
// console.log(almostIncreasingSequence([1, 3, 2]));//true