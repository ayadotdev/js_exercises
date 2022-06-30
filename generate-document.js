function generateDocument(characters, document) {
    if (document === "") return true;
    let charMap = new Map();
    let docMap = new Map();
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
            let char = document[i];
            if (!docMap.has(char)) {
                docMap.set(char, 1);
            } else {
                let counter = docMap.get(char);
                docMap.set(char, counter + 1);
            }
        }

        console.log(docMap);
        console.log(charMap);

        for (const [key, value] of docMap) {
            let valueFromCharMap = charMap.get(key);

            if (value !== valueFromCharMap) {
                result = false;
            }
        }
    }


    return result;
}

console.log(generateDocument('Bste!hetsi ogEAxpelrt x  ', 'AlgoExpert is the Best!'));

// Do not edit the line below.
exports.generateDocument = generateDocument;
