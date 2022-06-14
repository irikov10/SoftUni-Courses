function charactersInRange(char1, char2){
    let startChar = Math.min(char1.charCodeAt(0), char2.charCodeAt(0));
    let endChar = Math.max(char1.charCodeAt(0), char2.charCodeAt(0));

    let charsInRange = [];

    for(let i = startChar + 1; i < endChar; i++){
        let currentChar = String.fromCharCode(i);
        charsInRange.push(currentChar)
    }   
    console.log(charsInRange.join(' '));
}
charactersInRange('a','d')