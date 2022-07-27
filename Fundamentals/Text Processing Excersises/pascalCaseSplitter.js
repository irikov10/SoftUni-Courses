function pascalCaseSplitter(string){
    let index = 1;
    let arr = [];
    let cut = 0;

   while(index < string.length){
        if(string.charCodeAt(index) >= 65 && string.charCodeAt(index) <= 90){
            arr.push(string.slice(cut, string.length));
            cut = index;
        }
        index++;
    }
    arr.push(string.slice(cut, string.length));

    for(let i = 1; i < arr.length; i++){
        arr[i - 1] = arr[i - 1].replace(arr[i], '');
    }
    console.log(arr.join(', '))
}
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')