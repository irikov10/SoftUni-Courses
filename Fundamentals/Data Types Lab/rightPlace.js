function rightPlace(string, char, string2){
    let res = string.replace('_', char);
    if(res === string2){
        console.log('Matched');
    }else {
        console.log('Not matched');
    }
}
rightPlace('Str_ng', 'I', 'Strong')
rightPlace('Str_ng', 'i', 'String')