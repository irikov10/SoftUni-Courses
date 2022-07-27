function countStringOcurrences(text, word){
    let counter = 0;
    let splittedText = text.split(" ");

    for(let el of splittedText){
        if(el === word){
            counter++;
        }
    }
    console.log(counter)
}
countStringOcurrences('This is a word and it also is a sentence', 'is')