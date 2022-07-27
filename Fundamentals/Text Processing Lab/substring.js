function substring(word, start, count){
    let endPoint = start + count;
    let res = word.substring(start, endPoint);
    console.log(res)
}
substring('ASentence', 1, 8)