function stringSubstring(searchWord, sentence){
    let array = sentence.split(' ');

    for(const word of array){
        if(word.toLowerCase() === searchWord.toLowerCase()){
            return searchWord
        }
    }

    console.log(`${searchWord} not found!`)
}
console.log(stringSubstring('Javascript',
'JavaScript is the best programming language'
))