function generateDocument(characters, document) {
    if (document === "") return true;
    let charMap = new Map();
    let result = true;
    if (characters.length >= document.length) {
        for (let i = 0; i < characters.length; i++) {
            let char = characters[i];
            if (!charMap.has(char)) {
                charMap.set(char, 1);
            } else {
                let counter = charMap.get(char);
                charMap.set(char, counter + 1);
            }

        }

        for (let i = 0; i < document.length; i++) {
            if (!charMap.has(document[i])) {
                return false;
            }
            const occur = charMap.get(document[i]);
            if (occur > 1) {
                charMap.set(document[i], occur - 1);
            } else {
                charMap.delete(document[i]);
            }
        }
        return result;

    } else {
        return false;
    }
}

console.log(generateDocument('Bste!hetsi ogEAxpelrt x  ', 'AlgoExpert is the Best!'));


