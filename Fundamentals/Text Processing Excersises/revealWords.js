function revealWords(words, sentence){
    let revealedWords = words.split(', ');
    let splittedSentence = sentence.split(' ');

    for(let word of revealedWords){
        
        for(let neededWord of splittedSentence){
            if(neededWord.includes('*') && neededWord.length === word.length){
                sentence = sentence.replace(neededWord, word);
            }
        }
    }
    console.log(sentence)
}
revealWords('great',
'softuni is ***** place for learning new programming languages'
)